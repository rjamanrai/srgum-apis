// Audio.prototype.play = (function(play) {
//   return function () {
//     var audio = this,
//         args = arguments,
//         promise = play.apply(audio, args);
//     if (promise !== undefined) {
//       promise.catch(_ => {
//         // Autoplay was prevented. This is optional, but add a button to start playing.
//         var el = document.createElement("button");
//         el.innerHTML = "Play";
//         el.addEventListener("click", function(){play.apply(audio, args);});
//         this.parentNode.insertBefore(el, this.nextSibling)
//       });
//     }
//   };
//   })(Audio.prototype.play)