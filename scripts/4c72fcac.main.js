"use strict";!function(a,b){var c=a.jQuery||a.$||jQuery||c;"function"==typeof define&&define.amd?define(["jquery"],function(c){a.myPortfolio=b(a,c,{})}):a.myPortfolio=b(a,c,{})}("undefined"!=typeof window?window:this,function(a,b,c){function d(a,b,c){for(var d="undefined"!=typeof c?[c]:document.styleSheets,e=0,f=d.length;f>e;e++){var c=d[e];if(c.cssRules)for(var g=0,h=c.cssRules.length;h>g;g++){var i=c.cssRules[g];if(i.selectorText&&-1!==i.selectorText.split(",").indexOf(b))return i.style[a]}}return null}return c.init=function(){var a;b("#main-pages").fullpage({scrollingSpeed:500,touchSensitivity:25,scrollBar:!0,navigation:!0,fitToSection:!1,autoScrolling:!1,keyboardScrolling:!0,navigationTooltips:["Hello","What I offer","Experience","Contact"],anchors:["hello","skills","projects","contact"],afterRender:function(){a=b("#fp-nav"),b(".column-introduction").find("h1, h2, h3, p").addClass("run-anim")},afterLoad:function(b){console.log("hurdur"),a.removeClass("hello skills projects contact").addClass(b)}}),b(".section.contact").append(this.createRainbowHeader(17));var d=b(".skills .fa-li"),e=this.dirtyRainbow(d.length,0);return d.each(function(a){b(this).css("color",e[a])}),b.stellar({horizontalScrolling:!1,verticalOffset:40}),c.validateContactForm(),c.contactButton=c.ContactSubmit(),c.projectSwither=new c.ProjectSwitcher,this},c.ProjectSwitcher=function(a){var e,f=this,g=b(".project-leader"),h=b(".close-project"),i=b(".container"),j=i.filter(".leaders-page"),k=i.filter(".project-page");return f.animatedOverlay=a||new c.AnimateSvg(b(".pageload-overlay")),b.extend(f,{init:function(){return f.initListeners(),f},initListeners:function(){g.click(function(){var a=b(this).attr("data-project"),c=d("background-color",".section.projects."+a);f.showProject(a,c)}),h.click(function(a){a.preventDefault(),f.closeProject()})},showProject:function(a,b){f.animatedOverlay.show(function(){var c=k.filter("."+a);e=c,f.switchPage(j,c),f.animatedOverlay.hide(void 0,b)},b)},closeProject:function(){var a=d("background-color",".section.projects");f.animatedOverlay.show(function(){f.switchPage(e,j),f.animatedOverlay.hide(void 0,a)},a)},switchPage:function(a,c){var d=a instanceof jQuery?a:b(a),e=c instanceof jQuery?c:b(c),f=b(".section.projects"),g=b("#fp-nav");d.addClass("hidden"),e.removeClass("hidden"),d.is(j)&&e.attr("data-project")&&(f.addClass(e.attr("data-project")),g.css("display","none")),e.is(j)&&d.attr("data-project")&&(f.removeClass(d.attr("data-project")),g.css("display","")),b.fn.fullpage.moveTo("projects"),b.fn.fullpage.reBuild()}}),f.init()},c.AnimateSvg=function(a,c){var d,e,f,g=this;return g.element=e=a,g.options=f=b.extend({speedIn:100,speedOut:100,easeIn:mina.linear,easeOut:mina.linear,fill:"#fff"},c),g.scene=d=Snap(e.find("svg")[0]),g.path=d.select("path"),g.$path=b(".pageload-overlay svg path"),g.initialPath=g.path.attr("d"),g.animateInSteps=e.attr("data-in").split(";"),g.animateOutSteps=e.attr("data-out").split(";"),g.isAnimating=!1,g.show=function(a,b){var c=b||f.fill;return g.isAnimating?!1:(g.isAnimating=!0,g.$path.css("fill",c),g.runAnimation(!0,function(){g.isAnimating=!1,a&&a()}),void e.addClass("show"))},g.hide=function(a,b){var c=b||f.fill;g.isAnimating=!0,g.$path.css("fill",c),g.runAnimation(!1,function(){g.path.attr("d",g.initialPath),g.isAnimating=!1,e.removeClass("show"),a&&a()})},g.runAnimation=function(a,b){var c=0,d=a?g.animateInSteps:g.animateOutSteps,e=d.length,h=a?f.speedIn:f.speedOut,i=a?f.easeIn:f.easeOut,j=function(a){return a===e?void b():void g.path.animate({path:d[a]},h,i,function(){j(++a)})};j(c)},g},c.ContactSubmit=function(){var a=this;b.extend(a,{onSubmit:function(){var c=a.validateFields();b(".validate").each(function(){b(this).next(".validation-notification").toggleClass("hidden",!!b(this).hasClass("is-valid"))}),c&&b.ajax("contact.php",{method:"POST",data:{email:b("input").val(),message:b("textarea").val()}}).done(function(b){a.onResponse(b)}).fail(function(){a.errorHandler()})},onResponse:function(b){return"success"in b?void a.succesHandler():void a.errorHandler()},errorHandler:function(){b(".send-notification.error").show()},succesHandler:function(){b(".send-notification.success").show(),b(".validate").val("").removeClass("is-valid email-invalid required-invalid")},validateFields:function(){var a=b(".validate"),c=!0;return a.length<1?!1:(a.each(function(){c&&(c=b(this).hasClass("is-valid")?!0:!1)}),c)}}),b(".contact-send").click(a.onSubmit)},c.validateContactForm=function(){var a=function(a){var b=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return b.test(a)},c=function(a){return a.length>0},d=b.map(b(".validate"),function(d){var e=b(d),f=[];return e.hasClass("validate-email")&&f.push({invalid:"email-invalid",func:a}),e.hasClass("validate-required")&&f.push({invalid:"required-invalid",func:c}),e.removeClass("validate-email validate-required"),f.length<1?void 0:{element:e,parameters:f,firstFocus:!0,valid:!1}});b.each(d,function(){var a=this,c=a.element,d=a.valid,e=a.firstFocus,f=a.parameters,g=function(){return d=!0,b.each(f,function(){var a=this.func(c.val());d=d?a:!1,c.toggleClass(this.invalid,!a),c.toggleClass("is-valid",!!d)}),d&&c.next(".validation-notification").addClass("hidden"),d};c.focusout(function(){e=!1,g()}),c.on("input",function(){e||g()})})},c.createRainbowHeader=function(a){for(var c=a||12,d=this.dirtyRainbow(c),e=b("<header/>").addClass("rainbow"),f=-1;d[++f];)b("<div/>").addClass("color-block").css("background-color",d[f]).css("width",""+100/c+"%").appendTo(e);return e},c.dirtyRainbow=function(a,b){var c=a||12,b=b||0,d=Math,e=2*d.PI,f=d.cos,g=[],h=function(a,b,c){return a?(b-=e/-50,c.push("#"+(127*f(b)+128<<16|127*f(b+e/3)+128<<8|127*f(b+e/3*2)+128).toString(16)),h(--a,b,c)):c};return h(c,b,g)},c.init()});