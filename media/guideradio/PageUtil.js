var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var isIE=navigator.appVersion.indexOf("MSIE")!=-1?true:false,IEVer=0;if(isIE){var re=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(re.exec(navigator.appVersion)!=null)IEVer=parseFloat(RegExp.$1)}function openMenu(link){focusedMenu=link;try{var linkWidth=document.getElementById(link).offsetWidth,ul=document.getElementById(link).getElementsByTagName("ul");if(ul[0]!=null&&ul[0]!="undefined")ul[0].style.minWidth=linkWidth+"px"}catch(e){}document.getElementById(link).className="OpenedMenu"}function closeMenu(link){if(isIE&&IEVer<=6)closeMenuFinal(link);else menuCloseTimeout=setTimeout("closeMenuFinal('"+link+"')",100)}var focusedMenu=null,menuCloseTimeout=0;function keepMenu(link){if(focusedMenu==link)if(isIE&&IEVer<=6)openMenu(link);else clearTimeout(menuCloseTimeout)}function closeMenuFinal(link){document.getElementById(link).className="ClosedMenu"}function flashCapable(){return GetSwfVer()!=-1}function htmlDecode(str){var div=document.createElement("div");div.innerHTML=str;return div.innerText}var origHeight=0;function openLocaleMenu(link){try{var ul=document.getElementById(link).getElementsByTagName("ul");if(ul[0]!=null&&ul[0]!="undefined"){var windowHeight=0,menuPosY=getPosY(ul[0]);openMenu(link);if(origHeight==0)origHeight=ul[0].offsetHeight;if(typeof window.innerHeight=="number")windowHeight=window.innerHeight;else if(document.documentElement&&document.documentElement.clientHeight)windowHeight=document.documentElement.clientHeight;var menuHeight=windowHeight-menuPosY;if(origHeight>menuHeight-15)ul[0].style.height=menuHeight-15+"px";else ul[0].style.height=origHeight+"px"}}catch(e){}}function getPosY(obj){var y=0;while(obj.offsetParent){y+=obj.offsetTop;obj=obj.offsetParent}return y}function TrackLink(obj,groupTagNo,groupName,linkEvent){try{if(obj.childNodes[0].nodeName=="IMG")linkText=obj.getAttribute("title");else if(obj.innerText)linkText=obj.innerText;else linkText=obj.textContent;var LinkTags=["DCSext.wm_linkid",linkText,"DCSext.wm_evt",linkEvent,"DCSext.wm_lnkpos",groupName+" - "+linkEvent],target=obj.getAttribute("target"),href=obj.getAttribute("href");if(target==null||target=="")target="_self";if(!isIE){if(target=="external")window.open(href,target);else window.location.href=href;dcsMultiTrack.apply(obj,LinkTags.concat(GroupTags[groupTagNo]))}else{dcsMultiTrack.apply(obj,LinkTags.concat(GroupTags[groupTagNo]));window.open(href,target)}return false}catch(e){}}

}
/*
     FILE ARCHIVED ON 14:53:37 Jul 01, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:24:56 Jun 16, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 838.35
  exclusion.robots: 615.257
  exclusion.robots.policy: 615.247
  xauthn.identify: 465.394
  xauthn.chkprivs: 149.632
  RedisCDXSource: 25.302
  esindex: 0.007
  LoadShardBlock: 177.747 (3)
  PetaboxLoader3.datanode: 221.765 (4)
  CDXLines.iter: 12.747 (3)
  load_resource: 120.535
  PetaboxLoader3.resolve: 57.618
*/