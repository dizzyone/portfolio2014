"use strict";!function(a,b){var c=a.jQuery||a.$||jQuery||c;"function"==typeof define&&define.amd?define(["jquery"],function(c){a.myPortfolio=b(a,c,{})}):a.myPortfolio=b(a,c,{})}("undefined"!=typeof window?window:this,function(a,b,c){return c.init=function(){b("#main-pages").fullpage({scrollingSpeed:500,touchSensitivity:25,scrollBar:!0,navigation:!0,fitToSection:!1,autoScrolling:!1,navigationTooltips:["Hello","What I do","Experience","Contact"],anchors:["Hello","Skills","Projects","Contact"]}),b(".section.contact").append(this.createRainbowHeader(17));var a=b(".skills .fa-li"),d=this.dirtyRainbow(a.length,0);return a.each(function(a){b(this).css("color",d[a])}),b.stellar({horizontalScrolling:!1,verticalOffset:40}),c.validateContactForm(),c.contactButton=c.contactSubmit(),c.projectLoadOverlay=new c.animateSvg(b(".pageload-overlay")),this},c.animateSvg=function(a,c){var d,e,f,g=this;return g.element=e=a,g.options=f=b.extend({speed:200,easeIn:mina.linear,easeOut:mina.linear},c),g.scene=d=Snap(e.find("svg")[0]),g.path=d.select("path"),g.initialPath=g.path.attr("d"),g.animateInSteps=e.attr("data-in").split(";"),g.animateOutSteps=e.attr("data-out").split(";"),g.isAnimating=!1,g.show=function(){return g.isAnimating?!1:(g.isAnimating=!0,g.runAnimation(!0,function(){g.isAnimating=!1}),void e.addClass("show"))},g.hide=function(){g.isAnimating=!0,g.runAnimation(!1,function(){g.path.attr("d",g.initialPath),g.isAnimating=!1,e.removeClass("show")})},g.runAnimation=function(a,b){var c=0,d=a?g.animateInSteps:g.animateOutSteps,e=d.length,h=f.speed,i=a?f.easeIn:f.easeOut,j=function(a){return a===e?void b():void g.path.animate({path:d[a]},h,i,function(){j(++a)})};j(c)},g},c.contactSubmit=function(){var a=this;b.extend(a,{onSubmit:function(){var c=a.validateFields();b(".validate").each(function(){b(this).next(".validation-notification").toggleClass("hidden",!!b(this).hasClass("is-valid"))}),c&&b.ajax("contact.php",{method:"POST",data:{email:b("input").val(),message:b("textarea").val()}}).done(function(b){a.onResponse(b)}).fail(function(b){a.onResponse(b)})},onResponse:function(b){return"success"in b?void a.succesHandler():void a.errorHandler()},errorHandler:function(){b(".send-notification.error").show()},succesHandler:function(){b(".send-notification.success").show(),b(".validate").val("").removeClass("is-valid email-invalid required-invalid")},validateFields:function(){var a=b(".validate"),c=!0;return a.length<1?!1:(a.each(function(){c&&(c=b(this).hasClass("is-valid")?!0:!1)}),c)}}),b(".contact-send").click(a.onSubmit)},c.validateContactForm=function(){var a=function(a){var b=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return b.test(a)},c=function(a){return a.length>0},d=b.map(b(".validate"),function(d){var e=b(d),f=[];return e.hasClass("validate-email")&&f.push({invalid:"email-invalid",func:a}),e.hasClass("validate-required")&&f.push({invalid:"required-invalid",func:c}),e.removeClass("validate-email validate-required"),f.length<1?void 0:{element:e,parameters:f,firstFocus:!0,valid:!1}});b.each(d,function(){var a=this,c=a.element,d=a.valid,e=a.firstFocus,f=a.parameters,g=function(){return d=!0,b.each(f,function(){var a=this.func(c.val());d=d?a:!1,c.toggleClass(this.invalid,!a),c.toggleClass("is-valid",!!d)}),d&&c.next(".validation-notification").addClass("hidden"),d};c.focusout(function(){e=!1,g()}),c.on("input",function(){e||g()})})},c.createRainbowHeader=function(a){for(var c=a||12,d=this.dirtyRainbow(c),e=b("<header/>").addClass("rainbow"),f=-1;d[++f];)b("<div/>").addClass("color-block").css("background-color",d[f]).css("width",""+100/c+"%").appendTo(e);return e},c.dirtyRainbow=function(a,b){var c=a||12,b=b||0,d=Math,e=2*d.PI,f=d.cos,g=[],h=function(a,b,c){return a?(b-=e/-50,c.push("#"+(127*f(b)+128<<16|127*f(b+e/3)+128<<8|127*f(b+e/3*2)+128).toString(16)),h(--a,b,c)):c};return h(c,b,g)},c.init()});