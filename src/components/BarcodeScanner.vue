/* eslint-disable no-unused-vars */
<template>
  <div>
    <div>
      <a class="button" id="startButton">Start</a>
      <a class="button" id="resetButton">Reset</a>
    </div>
    <div>
      <video
        id="video"
        width="300"
        height="200"
        style="border: 1px solid gray"
      ></video>
    </div>

    <div id="sourceSelectPanel" style="display: none">
      <label for="sourceSelect">Change video source:</label>
      <select id="sourceSelect" style="max-width: 400px"></select>
    </div>

    <label>Result:</label>
    <pre><code id="result"></code></pre>
  </div>
</template>

<script>
import { BrowserMultiFormatReader } from "@zxing/library";

export default {
  data() {
    return {};
  },
  created() {
    let selectedDeviceId;
    const codeReader = new BrowserMultiFormatReader();
    console.log("ZXing code reader initialized");
    codeReader
      .listVideoInputDevices()
      .then((videoInputDevices) => {
        const sourceSelect = document.getElementById("sourceSelect");
        selectedDeviceId = videoInputDevices[0].deviceId;
        if (videoInputDevices.length >= 1) {
          videoInputDevices.forEach((element) => {
            const sourceOption = document.createElement("option");
            sourceOption.text = element.label;
            sourceOption.value = element.deviceId;
            sourceSelect.appendChild(sourceOption);
          });

          sourceSelect.onchange = () => {
            selectedDeviceId = sourceSelect.value;
          };

          const sourceSelectPanel =
            document.getElementById("sourceSelectPanel");
          sourceSelectPanel.style.display = "block";
        }

        document.getElementById("startButton").addEventListener("click", () => {
          codeReader.decodeFromVideoDevice(
            selectedDeviceId,
            "video",
            (result, err) => {
              if (result) {
                console.log(result);
                document.getElementById("result").textContent = result.text;
              }
              //   if (err && !(err instanceof NotFoundException)) {
              //     console.error(err);
              //     document.getElementById("result").textContent = err;
              //   }
            }
          );
          console.log(
            `Started continous decode from camera with id ${selectedDeviceId}`
          );
        });

        document.getElementById("resetButton").addEventListener("click", () => {
          codeReader.reset();
          document.getElementById("result").textContent = "";
          console.log("Reset.");
        });
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<style></style>
