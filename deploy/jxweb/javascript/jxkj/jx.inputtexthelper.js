(function(b){function a(c){this.$target=b(c);this.selector="input[type=text]:not([input-helper='disabled'])";this.init()}a.prototype.init=function(){this.initElement();this.initEvents()};a.prototype.initElement=function(){this.$view=b(".plugin-input-text-helper-view");if(!this.$view.length){this.$view=b('<div class="plugin-input-text-helper-view"></div>').appendTo("body")}};a.prototype.initEvents=function(){b(document).on("focusin mouseenter",this.selector,b.proxy(function(c){this.$target=b(c.target);this.$view.css({"font-size":this.$target.css("font-size"),"font-family":this.$target.css("font-family"),"word-spacing":this.$target.css("word-spacing"),height:this.$target.height(),"line-height":this.$target.css("line-height")}).html(this.$target.val());this.position()},this)).on("keyup",this.selector,b.proxy(function(c){this.$target=b(c.target);this.$view.html(this.$target.val());this.position()},this)).on("focusout mouseleave",this.selector,b.proxy(function(){if(b(this.selector).filter("focus")){this.$view.css({left:-9999,top:-9999,right:"auto"})}},this))};a.prototype.position=function(){var d={};var g=this.$target.outerWidth();var c=b(window).width();var e=this.$view.width();if(g<e){var f=this.$target.offset();if(f.left+e>c){d.right=c-f.left-g;d.left="auto"}else{d.left=f.left;d.right="auto"}d.top=f.top-this.$view.outerHeight()-2}else{d.left=-9999;d.top=-9999;d.right="auto"}this.$view.css(d)};b.inputTextHelper=function(){new a()};b(function(){b.inputTextHelper()})})(jQuery);