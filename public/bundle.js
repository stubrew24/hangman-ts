!function(i){var n={};function a(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=i,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([function(e,t,i){"use strict";var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var n=Array(e),a=0;for(t=0;t<i;t++)for(var r=arguments[t],s=0,o=r.length;s<o;s++,a++)n[a]=r[s];return n};Object.defineProperty(t,"__esModule",{value:!0});var a=i(3),r=i(4),s=(o.prototype.randomWord=function(){return r.default[Math.floor(Math.random()*Math.floor(r.default.length-1))].toUpperCase().split("")},o.prototype.guessLetter=function(i){var n=this;if(!this.available.includes(i))return null;this.word.includes(i)?this.word.map(function(e,t){e===i&&(n.hits[t]=i)}):this.misses.push(i)},o);function o(){this.available=n(a.default),this.word=this.randomWord(),this.hits=this.word.map(function(e){return null}),this.misses=[]}t.default=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(2),a=i(0),r=i(5);new n.default(new a.default,new r.default)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),a=(r.prototype.render=function(){var e=this.view,t=this.model,i=this.reset,n=t.hits,a=t.misses,r=t.available;return e.displayHits(n),this.checkGameWon()?e.gameEnd(i,"win"):(e.displayMisses(a),this.checkGameOver()?e.gameEnd(i,"lose",t.word.join("")):void e.displayAvailable(r,n,a))},r);function r(e,t){var i=this;this.handleGuessLetter=function(e){i.model.guessLetter(e),i.render()},this.checkGameWon=function(){if(i.model.word.join("")===i.model.hits.join(""))return!0},this.checkGameOver=function(){if(6<=i.model.misses.length)return!0},this.reset=function(){i.model=new n.default,i.render()},this.model=e,this.view=t,this.view.bindGuessLetter(this.handleGuessLetter),this.render()}t.default=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",null,"V","W","X","Y","Z",null]},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=["abruptly","absurd","abyss","affix","askew","avenue","awkward","axiom","azure","bagpipes","bandwagon","banjo","bayou","beekeeper","bikini","blitz","blizzard","boggle","bookworm","boxcar","boxful","buckaroo","buffalo","buffoon","buxom","buzzard","buzzing","buzzwords","caliph","cobweb","cockiness","croquet","crypt","curacao","cycle","daiquiri","dirndl","disavow","dizzying","duplex","dwarves","embezzle","equip","espionage","euouae","exodus","faking","fishhook","fixable","fjord","flapjack","flopping","fluffiness","flyby","foxglove","frazzled","frizzled","fuchsia","funny","gabby","galaxy","galvanize","gazebo","giaour","gizmo","glowworm","glyph","gnarly","gnostic","gossip","grogginess","haiku","haphazard","hyphen","iatrogenic","icebox","injury","ivory","ivy","jackpot","jaundice","jawbreaker","jaywalk","jazziest","jazzy","jelly","jigsaw","jinx","jiujitsu","jockey","jogging","joking","jovial","joyful","juicy","jukebox","jumbo","kayak","kazoo","keyhole","khaki","kilobyte","kiosk","kitsch","kiwifruit","klutz","knapsack","larynx","lengths","lucky","luxury","lymph","marquis","matrix","megahertz","microwave","mnemonic","mystify","naphtha","nightclub","nowadays","numbskull","nymph","onyx","ovary","oxidize","oxygen","pajama","peekaboo","phlegm","pixel","pizazz","pneumonia","polka","pshaw","psyche","puppy","puzzling","quartz","queue","quips","quixotic","quiz","quizzes","quorum","razzmatazz","rhubarb","rhythm","rickshaw","schnapps","scratch","shiv","snazzy","sphinx","spritz","squawk","staff","strength","strengths","stretch","stronghold","stymied","subway","swivel","syndrome","thriftless","thumbscrew","topaz","transcript","transgress","transplant","triphthong","twelfth","twelfths","unknown","unworthy","unzip","uptown","vaporize","vixen","vodka","voodoo","vortex","voyeurism","walkway","waltz","wave","wavy","waxy","wellspring","wheezy","whiskey","whizzing","whomever","wimpy","witchcraft","wizard","woozy","wristwatch","wyvern","xylophone","yachtsman","yippee","yoked","youthful","yummy","zephyr","zigzag","zigzagging","zilch","zipper","zodiac","zombie"]},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(a.prototype.createElement=function(e,t){var i=document.createElement(e);return t&&(i.className=t),i},a.prototype.getElement=function(e){return document.querySelector(e)},a.prototype.clearElement=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},a.prototype.displayAvailable=function(e,i,n){var a=this;this.clearElement(this.keyboard),e.forEach(function(e){var t=a.createElement("button","letter-btn");t.textContent=e||".",(i.includes(e)||n.includes(e))&&(t.disabled=!0),a.keyboard.append(t)})},a.prototype.displayHits=function(e){var t=this;this.hits.innerHTML="",e.forEach(function(e){t.hits.innerHTML+=null===e?" _ ":" "+e+" "})},a.prototype.displayMisses=function(e){var t=this;this.misses.innerHTML="",e.forEach(function(e){t.misses.innerHTML+=' <span class="strikediag">'+e+"</span> "}),this.showGraphic.innerHTML='<img src="./images/img'+e.length+'.png"/ alt="hangman graphic">'},a.prototype.bindGuessLetter=function(i){this.keyboard.addEventListener("click",function(e){if("letter-btn"===e.target.className){var t=e.target.textContent;i(t)}})},a.prototype.gameEnd=function(e,t,i){var n=this,a=this.createElement("div","game-end-text");a.innerHTML="win"===t?"You win!":"Gameover! <br />The word was "+i;var r=this.createElement("button","new-game-btn");r.textContent="PLAY AGAIN",r.addEventListener("click",function(){n.gameEndModal.remove(),e()}),a.append(r),this.gameEndModal.innerHTML="",this.gameEndModal.append(a),this.app.append(this.gameEndModal)},a);function a(){this.app=this.getElement("#root"),this.keyboard=this.createElement("div","keyboard"),this.hits=this.createElement("div","hits"),this.misses=this.createElement("div","misses"),this.statusBar=this.createElement("div","status-bar"),this.statusBar.innerHTML="HANG_<span class='title-m'></span>AN",this.gameEndModal=this.createElement("div","game-end"),this.showGraphic=this.createElement("pre","graphic"),this.app.append(this.statusBar,this.hits,this.showGraphic,this.misses,this.keyboard)}t.default=n}]);