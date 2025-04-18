const $shareButton = document.getElementById("share-button");
const $shareIconSVG = document.querySelector("#share-button > i");
const shareContainerClassList = document.getElementById("share-container").classList;

$shareButton.addEventListener("click", () => {
const shareButtonClassList = $shareButton.classList;
const shareIconClassList = $shareIconSVG.classList;


//changing color of share button
shareButtonClassList.toggle("bg-[hsl(214,17%,51%)]");
shareButtonClassList.toggle("bg-[hsl(210,46%,95%)]");
shareButtonClassList.toggle("share-button-positioning")

// changing color of share button icon
shareIconClassList.toggle("text-[hsl(214,17%,51%)]");
shareIconClassList.toggle("text-white");

// changing class names for share container
shareContainerClassList.toggle("hidden");
shareContainerClassList.toggle("absolute");

});
