/*! Summernote v0.8.2 | (c) 2013-2015 Alan Hong and other contributors | MIT license */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(window.jQuery)}(function(a){var b=a.summernote.ui,c=a.summernote.dom,d=function(d){var e=this,f=d.options,g=f.langInfo;e.icon='<i class="fa fa-object-group"/>',d.memo("button.databasic",function(){return b.button({contents:e.icon,tooltip:g.databasic.insert,click:d.createInvokeHandler("databasic.showDialog")}).render()}),d.memo("button.databasicDialog",function(){return b.button({contents:e.icon,tooltip:g.databasic.edit,click:d.createInvokeHandler("databasic.showDialog")}).render()}),d.memo("button.databasicSize100",function(){return b.button({contents:'<span class="note-fontsize-10">100%</span>',tooltip:g.image.resizeFull,click:d.createInvokeHandler("editor.resize","1")}).render()}),d.memo("button.databasicSize50",function(){return b.button({contents:'<span class="note-fontsize-10">50%</span>',tooltip:g.image.resizeHalf,click:d.createInvokeHandler("editor.resize","0.5")}).render()}),d.memo("button.databasicSize25",function(){return b.button({contents:'<span class="note-fontsize-10">25%</span>',tooltip:g.image.resizeQuarter,click:d.createInvokeHandler("editor.resize","0.25")}).render()}),e.events={"summernote.init":function(b,c){a("data.ext-databasic",c.editable).each(function(){e.setContent(a(this))})},"summernote.keyup summernote.mouseup summernote.change summernote.scroll":function(){e.update()},"summernote.dialog.shown":function(){e.hidePopover()}},e.initialize=function(){var c=f.dialogsInBody?a(document.body):d.layoutInfo.editor,h='<div class="form-group row-fluid"><label>'+g.databasic.testLabel+'</label><input class="ext-databasic-test form-control" type="text" /></div>',i='<button href="#" class="btn btn-primary ext-databasic-save">'+g.databasic.insert+"</button>";e.$dialog=b.dialog({title:g.databasic.name,fade:f.dialogsFade,body:h,footer:i}).render().appendTo(c),e.$popover=b.popover({className:"ext-databasic-popover"}).render().appendTo("body");var j=e.$popover.find(".popover-content");d.invoke("buttons.build",j,f.popover.databasic)},e.destroy=function(){e.$popover.remove(),e.$popover=null,e.$dialog.remove(),e.$dialog=null},e.update=function(){if(!d.invoke("editor.hasFocus"))return void e.hidePopover();var b=d.invoke("editor.createRange"),f=!1;if(b.isOnData()){var g=a(b.sc).closest("data.ext-databasic");if(g.length){var h=c.posFromPlaceholder(g[0]);e.$popover.css({display:"block",left:h.left,top:h.top}),d.invoke("editor.saveTarget",g[0]),f=!0}}f||e.hidePopover()},e.hidePopover=function(){e.$popover.hide()},e.getInfo=function(){var b=d.invoke("editor.createRange");if(b.isOnData()){var c=a(b.sc).closest("data.ext-databasic");if(c.length)return{node:c,test:c.attr("data-test")}}return{}},e.setContent=function(a){a.html('<p contenteditable="false">'+e.icon+" "+g.databasic.name+": "+a.attr("data-test")+"</p>")},e.updateNode=function(a){e.setContent(a.node.attr("data-test",a.test))},e.createNode=function(b){var c=a('<data class="ext-databasic"></data>');return c&&(b.node=c,d.invoke("editor.insertNode",c[0])),c},e.showDialog=function(){var c=e.getInfo(),f=!c.node;d.invoke("editor.saveRange"),e.openDialog(c).then(function(g){b.hideDialog(e.$dialog),d.invoke("editor.restoreRange"),f&&e.createNode(c),a.extend(c,g),e.updateNode(c)}).fail(function(){d.invoke("editor.restoreRange")})},e.openDialog=function(c){return a.Deferred(function(a){var f=e.$dialog.find(".ext-databasic-test"),h=e.$dialog.find(".ext-databasic-save"),i=function(a){13===a.keyCode&&h.trigger("click")};b.onDialogShown(e.$dialog,function(){d.triggerEvent("dialog.shown"),f.val(c.test).on("input",function(){b.toggleBtn(h,f.val())}).trigger("focus").on("keyup",i),h.text(c.node?g.databasic.edit:g.databasic.insert).click(function(b){b.preventDefault(),a.resolve({test:f.val()})}),b.toggleBtn(h,f.val())}),b.onDialogHidden(e.$dialog,function(){f.off("input keyup"),h.off("click"),"pending"===a.state()&&a.reject()}),b.showDialog(e.$dialog)})}};a.extend(!0,a.summernote,{plugins:{databasic:d},options:{popover:{databasic:[["databasic",["databasicDialog","databasicSize100","databasicSize50","databasicSize25"]]]}},lang:{"en-US":{databasic:{name:"Basic Data Container",insert:"insert basic data container",edit:"edit basic data container",testLabel:"test input"}}}})});