
(function() {
  console.log("TL load1")
   // your page initialization code here
   // the DOM will be available here

})();

document.addEventListener('turbo:before-stream-render' , function() {
  console.log("TL load3")
  // setTimeout(fadeOutAlert, 5000);
});

document.addEventListener("turbolinks:load", () => {
  console.log("TL load2")
});
