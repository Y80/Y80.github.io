var i=Object.defineProperty,a=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,e=Object.prototype.propertyIsEnumerable,t=(a,o,e)=>o in a?i(a,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[o]=e,s=(i,s)=>{for(var l in s||(s={}))a.call(s,l)&&t(i,l,s[l]);if(o)for(var l of o(s))e.call(s,l)&&t(i,l,s[l]);return i};import{r as l,s as n,p as r,f as k,k as d,n as c,o as g,c as m,b as h,F as b,d as p,t as u,w as f,_ as v,e as L,h as y}from"./index.6f9f6b42.js";import{_ as T}from"./Tag.708a0204.js";import{u as w,_ as B,a as C}from"./Table.1d3edf62.js";import{_ as P}from"./BookmarkBlock.0119f8e1.js";const x={props:{visible:{type:Boolean,required:!0},pickedTagList:{type:Array,default:()=>[]},confirm:{type:Function,required:!0}},setup(){const{tagList:i,getAllTags:a}=w();return{tagList:i,getAllTags:a}},data:()=>({}),methods:{close(){this.$emit("update:visible",!1)},confirmHandler(){const i=[];this.tagList.forEach((a=>{a.picked&&i.push(a)})),this.confirm(i)},onClickTag(i){this.tagList[i].picked=!this.tagList[i].picked,this.confirmHandler()},hightLightPickedTag(){this.tagList.forEach((i=>{i.picked=!1;for(const a of this.pickedTagList)if(a.name===i.name){i.picked=!0;break}}))},refresh(i){i&&(i.target.style.animationPlayState="running"),this.getAllTags().then((()=>{this.confirm([]),this.hightLightPickedTag(),i&&(i.target.style.animationPlayState="paused")}))}},watch:{visible(i,a){!1===a&&!0===i&&this.hightLightPickedTag()},pickedTagList(){this.hightLightPickedTag()}},mounted(){this.refresh()}},I=f();r("data-v-879c0660");const D={class:"box"},_={class:"block tags"},S={class:"flex-end"};k();const A=I(((i,a,o,e,t,s)=>d((g(),m("div",D,[h("div",_,[(g(!0),m(b,null,p(e.tagList,((i,a)=>(g(),m("span",{class:["tag",i.picked?"is-primary":""],onClick:i=>s.onClickTag(a),key:i.name},u(i.name),11,["onClick"])))),128))]),h("div",S,[h("i",{class:"iconfont iconshuaxin",onClick:a[1]||(a[1]=(...i)=>s.refresh&&s.refresh(...i))})])],512)),[[c,o.visible]])));x.render=A,x.__scopeId="data-v-879c0660";const F={name:"bookmark",components:{FormItem:v,Tag:T,BookmarkBlock:P,TagPicker:x,Confirm:B,Table:C},setup(){const{bookmarkList:i,getBookmarkList:a,deleteBookmark:o,addBookmark:e,updateBookmark:t}=function(){const i=n("axios"),a=l([]),o=async()=>{a.value=await i.get("/bookmark")};return{bookmarkList:a,getBookmarkList:o,deleteBookmark:async a=>{await i.delete(`/bookmark/${a}`),o()},addBookmark:async a=>await i.post("/bookmark",a),updateBookmark:async a=>{await i.put("/bookmark",a)}}}(),{tagList:s,getAllTags:r}=w();a(),r();const{addLinks:k,delLinks:d}=function(){const i=n("axios");return{addLinks:async function(a){await i.post("/link",a)}}}();return{bookmarkList:i,getBookmarkList:a,deleteBookmark:o,addBookmark:e,updateBookmark:t,addLinks:k,delLinks:d,tagList:s}},data:()=>({dialog:{visible:!1,isAdd:!1,bookmark:{name:"",url:"",icon:"",description:""},showTagPicker:!1,tags:[]},delDialog:{visible:!1,message:"",bookmarkName:""},showBookmarks:[],tip:"所有书签",serializing:!1,loadingIcon:!1}),methods:{openDelDialog(i){this.delDialog={visible:!0,message:`确定要删除"${i.name}"吗`,bookmark:i}},openDialog(i={name:"",url:"",icon:"",description:""}){this.dialog={visible:!0,isAdd:!i.id,showTagPicker:!0,bookmark:i,pickedTagList:i.tagList||[]}},async dialogConfirm(){const{dialog:i}=this,a=this.dialog.pickedTagList.map((i=>i.id));i.isAdd?this.addBookmark(i.bookmark).then((({id:i})=>{this.addLinks({bookmarkId:i,tagIdList:a}).then(this.getBookmarkList)})).catch((i=>{alert(i.message)})):(delete i.bookmark.tagList,await this.updateBookmark(s(s({},i.bookmark),{tagIdList:a})),this.getBookmarkList()),window.scrollTo(0,Number.MAX_SAFE_INTEGER)},tagPickerConfirm(i){this.dialog.pickedTagList=i},clickTag(i){this.tip=`“${i.name}”关联的书签`,this.showBookmarks=[],Object.values(this.$db.bookmarks).forEach((a=>{a.tagIdList.includes(i.id)&&this.showBookmarks.push(a)}))},resetShowBookmarks(){this.tip="所有书签",this.showBookmarks=this.$db.bookmarks},generateSerializedFile(){this.serializing=!0,this.$axios.get("/serialize").then((()=>{this.serializing=!1,alert("已重置远程序列化文件")}))},getFavicon(){let i;try{const a=this.dialog.bookmark.url.split(".");if(i=a[a.length-2]+"."+a[a.length-1],!i)throw new Error}catch(a){return void alert("请输入有效的链接")}this.dialog.bookmark.icon="",this.loadingIcon=!0,this.$axios.get(`https://service-j3cuc7cz-1257263957.sh.apigw.tencentcs.com/get-favicon/${i}`).then((i=>{this.dialog.bookmark.icon=i})).catch((()=>{alert("获取图标失败，请重试")})).finally((()=>{this.loadingIcon=!1}))}},watch:{bookmarkList(){this.showBookmarks=this.bookmarkList}},created(){this.$utils.setSiteTitle("管理书签")}},j=f();r("data-v-449d5e00");const z={class:"tag-box"},$={class:"flex-between tip"},V={class:"button-group"},E={class:"bookmark-box"},O={class:"flex-between"},U={class:"tags picked-tags-box"},N={key:0,class:"empty-tip"};k();const q=j(((i,a,o,e,t,s)=>{const l=y("tag"),n=y("BookmarkBlock"),r=y("Confirm"),k=y("FormItem"),f=y("Tag"),v=y("TagPicker");return g(),m(b,null,[h("main",null,[h("div",z,[(g(!0),m(b,null,p(e.tagList,(i=>(g(),m(l,{size:"medium",showBoxShadow:"",key:i.id,entity:i,onClick:a=>s.clickTag(i)},null,8,["entity","onClick"])))),128))]),h("div",$,[h("span",{onClick:a[1]||(a[1]=(...i)=>s.resetShowBookmarks&&s.resetShowBookmarks(...i))},u(t.tip),1),h("div",V,[h("button",{onClick:a[2]||(a[2]=(...i)=>s.generateSerializedFile&&s.generateSerializedFile(...i)),class:["button margin-r",t.serializing?"is-loading":""]},"重置序列化文件",2),h("button",{class:"button",onClick:a[3]||(a[3]=i=>s.openDialog())},"添加")])]),h("div",E,[(g(!0),m(b,null,p(t.showBookmarks,(i=>(g(),m(n,{key:i.name,entity:i,edit:s.openDialog,del:s.openDelDialog},null,8,["entity","edit","del"])))),128))])]),h(r,{message:t.delDialog.message,visible:t.delDialog.visible,"onUpdate:visible":a[4]||(a[4]=i=>t.delDialog.visible=i),onConfirm:a[5]||(a[5]=i=>e.deleteBookmark(t.delDialog.bookmark.id))},null,8,["message","visible"]),h(r,{title:t.dialog.isAdd?"新建书签":"编辑书签",onConfirm:s.dialogConfirm,visible:t.dialog.visible,"onUpdate:visible":a[11]||(a[11]=i=>t.dialog.visible=i)},{default:j((()=>[h(k,{label:"名称",modelValue:t.dialog.bookmark.name,"onUpdate:modelValue":a[6]||(a[6]=i=>t.dialog.bookmark.name=i)},null,8,["modelValue"]),h(k,{label:"链接",modelValue:t.dialog.bookmark.url,"onUpdate:modelValue":a[7]||(a[7]=i=>t.dialog.bookmark.url=i)},null,8,["modelValue"]),h(k,{label:"描述",modelValue:t.dialog.bookmark.description,"onUpdate:modelValue":a[8]||(a[8]=i=>t.dialog.bookmark.description=i)},null,8,["modelValue"]),h(k,{label:"图标"},{default:j((()=>[h("p",O,[h("button",{class:["button margin-r",{"is-loading":t.loadingIcon}],onClick:a[9]||(a[9]=(...i)=>s.getFavicon&&s.getFavicon(...i))},"获取图标",2),h("input",{class:"input",value:t.dialog.bookmark.icon},null,8,["value"]),d(h("img",{style:{width:"64px"},class:"margin-l round-border",src:t.dialog.bookmark.icon,alt:""},null,8,["src"]),[[c,t.dialog.bookmark.icon]])])])),_:1}),h(k,{label:"关联标签"},{default:j((()=>{var i;return[h("div",U,[(g(!0),m(b,null,p(t.dialog.pickedTagList,(i=>(g(),m(f,{key:i.name,entity:i},null,8,["entity"])))),128)),(null==(i=t.dialog.pickedTagList)?void 0:i.length)?L("",!0):(g(),m("p",N," 暂无关联标签，请从下方选取 "))]),h(v,{visible:t.dialog.showTagPicker,"onUpdate:visible":a[10]||(a[10]=i=>t.dialog.showTagPicker=i),pickedTagList:t.dialog.pickedTagList,confirm:s.tagPickerConfirm},null,8,["visible","pickedTagList","confirm"])]})),_:1})])),_:1},8,["title","onConfirm","visible"])],64)}));F.render=q,F.__scopeId="data-v-449d5e00";export default F;
