(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[188],{3188:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>y});var a=t(7294),o=t(1120),n=t(2318),i=t(5704),s=t(5756),p=t(3754),m=t(7798),l=t(9669),d=t.n(l);window.refreshToken=!0;var c=t(5395),u=t(6912),g=t(8134),b=t(3715),h=t(4593),f=t(4043);function x(){return(x=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}const F=b.Z.language;!function(e){let r=(console.log(sessionStorage.getItem("token")),sessionStorage.getItem("token")||null);null!==r&&(console.log("set Token"),e.defaults.headers.Authorization=`Token ${r}`),e.defaults.headers["Content-Type"]="application/json",e.interceptors.response.use((e=>(!1!==e.success&&(e.success=!0),e)),(e=>{if(void 0!==e.response){const{status:r}=e.response;return e.response.success=!1,e.response}}))}(d());const k=(0,o.Z)((e=>({brand:{padding:"25vh 2.5rem 0 2.5rem",backgroundColor:"#FAFAFA",[e.breakpoints.up("sm")]:{display:"flex",flexDirection:"row",padding:"5rem",alignItems:"center",marginTop:"5vh"},[e.breakpoints.up("md")]:{padding:"10rem 7rem",marginTop:"0vh"},[e.breakpoints.up("lg")]:{padding:"10rem 12rem",marginTop:"0vh"},[e.breakpoints.up("xl")]:{padding:"10rem 30rem"}},signIn:{padding:"2.5rem",backgroundColor:"#FFFFFF",[e.breakpoints.up("sm")]:{padding:"5rem"},[e.breakpoints.up("md")]:{padding:"10rem 7rem"},[e.breakpoints.up("lg")]:{padding:"10rem 15rem"},[e.breakpoints.up("xl")]:{padding:"10rem 30rem"}},root:{color:"grey",fontSize:"0.7rem",borderRadius:"0.5rem",padding:"0.2rem","&.Mui-focused":{border:" 1px solid #FF6565","& .MuiOutlinedInput-notchedOutline":{border:"1px solid #FF6565"}}},rootArea:{color:"grey",fontSize:"0.7rem",borderRadius:"0.5rem",padding:"1.2rem","&.Mui-focused":{border:" 1px solid #FF6565","& .MuiOutlinedInput-notchedOutline":{border:"1px solid #FF6565"}}},h1:{fontFamily:"Poppins",fontWeight:"bold",color:"#41455c",fontSize:"2.8rem",[e.breakpoints.up("sm")]:{fontSize:"3rem"},[e.breakpoints.up("md")]:{fontSize:"5rem",width:"75%"}},body1:{fontFamily:"Poppins",margin:"2rem 0 0 0",fontSize:"0.8rem",color:"#41455c",lineHeight:"1rem",[e.breakpoints.up("sm")]:{width:"100%",lineHeight:"1.2rem"}},body2:{fontFamily:"Poppins",margin:"1rem 0 0.3rem 0",fontSize:"0.7rem",color:"#41455c",lineHeight:"1rem",[e.breakpoints.up("sm")]:{fontSize:"0.7rem"}},form:{paddingTop:"3rem",[e.breakpoints.up("md")]:{padding:"5rem 7rem"}},formContent:{display:"flex",flexDirection:"column",[e.breakpoints.up("md")]:{flexDirection:"row",justifyContent:"space-between"}},group:{display:"flex",flexDirection:"column",[e.breakpoints.up("md")]:{width:"40%"}},formControl:{borderRadius:"0.5rem",marginTop:"5px",width:"auto",background:"white","&:focus":{border:"1px solid #FF6565!important",boxShadow:"none!important"}},textarea:{borderRadius:"0.5rem",marginTop:"5px",background:"white","&:focus":{borderColor:"#FF6565!important",boxShadow:"none!important"},[e.breakpoints.up("md")]:{width:"250%"}},submit:{fontFamily:"Poppins",width:"100%",backgroundColor:"#FF6565",border:"none",borderRadius:"0.5rem",padding:"1rem 0",textTransform:"uppercase",color:"#FFFFFF",fontSize:"0.8rem",fontWeight:"bold","&:focus":{backgroundColor:"#FF6565 !important",color:"#41455c",border:"none",outline:"none",boxShadow:"none"},"&:hover":{backgroundColor:"#FF6565 !important",color:"#41455c",border:"none",outline:"none"},[e.breakpoints.up("md")]:{width:"40%",float:"right",marginTop:"2rem"}},img:{height:"500px",marginBottom:"5rem",zIndex:"2",[e.breakpoints.up("sm")]:{height:"400px",marginLeft:"0"},[e.breakpoints.up("md")]:{height:"500px"}},contentVideo:{background:"FFFFFEF",position:"absolute",height:"475px",width:"225px",borderRadius:"2rem",marginTop:"15px"},video4:{height:"475px",marginTop:"8px",marginLeft:"9px",width:"213px",position:"absolute",[e.breakpoints.up("sm")]:{height:"355px",width:"190px",marginLeft:"26px",marginTop:"10px"},[e.breakpoints.up("md")]:{height:"514px",marginLeft:"11px",marginTop:"-7px",width:"207px"}}})));let v={};function E(e){return a.createElement(c.Z,x({elevation:6,variant:"filled"},e))}function y(){const{t:e,i18n:r}=(0,g.$)(),t=k(),o=r.language,[l,c]=(0,a.useState)(0),[b,y]=(0,a.useState)(""),[N,w]=(0,a.useState)(""),[C,Z]=(0,a.useState)(""),[S,U]=(0,a.useState)(""),[T,L]=(0,a.useState)(""),[I,z]=(0,a.useState)(""),[P,A]=(0,a.useState)(""),[D,R]=(0,a.useState)(""),[q,G]=(0,a.useState)(""),j=()=>c((e=>e+1)),[H,O]=(0,a.useState)(!1);let _=null;const[W,M]=(0,a.useState)(!1);function B(e){return P!==I?(v.repeat_password=["Les mots de passe ne matchent pas !"],j(),!1):(delete v.repeat_password,j(),!0)}function V(){O(!1)}return(0,a.useEffect)((()=>(B(),j(),()=>{})),[P]),a.createElement(a.Fragment,null,a.createElement(h.q,null,a.createElement("title",null,"Shopisan | ",e("title.signUp")),a.createElement("meta",{name:"description",content:e("meta.signUpDescription")})),a.createElement("div",{className:t.brand,id:"signin",value:l},a.createElement("div",{className:"mr-md-5"},a.createElement(n.Z,{variant:"h1",className:t.h1},e("signUp.title")),a.createElement(n.Z,{variant:"body1",className:t.body1},e("signUp.text"),a.createElement("br",null),e("signUp.text1"),a.createElement("br",null),e("signUp.text2")),a.createElement(n.Z,{variant:"body1",className:t.body1},e("signUp.text3"))),a.createElement("div",{className:"d-flex justify-content-center mt-5"},a.createElement(f.Z,{url:`https://d3un281b2108zi.cloudfront.net/video/store-${o.toUpperCase()}.mp4`}))),a.createElement("div",{className:t.signIn},a.createElement("div",{className:"column"},a.createElement(n.Z,{variant:"h1",className:t.h1},e("signUp.form.title")),a.createElement(n.Z,{variant:"body1",className:t.body1},e("signUp.form.text"))),a.createElement("div",{className:"column"},a.createElement(s.Z,{className:t.form,ref:e=>{_=e}},a.createElement(u.Z,{open:H,autoHideDuration:1e4,onClose:V},a.createElement(E,{onClose:V,severity:"success"},e("successSu"))),a.createElement("div",{className:t.formContent},a.createElement(s.Z.Group,{className:t.group},a.createElement(s.Z.Label,{className:t.body2},e("signUp.form.store")),a.createElement(i.Z,x({className:t.formControl,placeholder:e("signUp.form.storeLabel"),required:!0,variant:"outlined",onChange:e=>{y(e.target.value)}},(0,m.FU)("brand",v),{InputProps:{className:t.root},disabled:W}))),a.createElement(s.Z.Group,{className:t.group},a.createElement(s.Z.Label,{className:t.body2},e("signUp.form.username")),a.createElement(i.Z,x({className:t.formControl,placeholder:e("signUp.form.usernameLabel"),required:!0,variant:"outlined",onChange:e=>{U(e.target.value)}},(0,m.FU)("username",v),{InputProps:{className:t.root},disabled:W})))),a.createElement("div",{className:t.formContent},a.createElement(s.Z.Group,{className:t.group},a.createElement(s.Z.Label,{className:t.body2},e("signUp.form.firstname")),a.createElement(i.Z,x({className:t.formControl,placeholder:e("signUp.form.firstnameLabel"),required:!0,variant:"outlined",onChange:e=>{Z(e.target.value)}},(0,m.FU)("surname",v),{InputProps:{className:t.root},disabled:W}))),a.createElement(s.Z.Group,{className:t.group},a.createElement(s.Z.Label,{className:t.body2},e("signUp.form.lastname")),a.createElement(i.Z,x({className:t.formControl,placeholder:e("signUp.form.lastnameLabel"),required:!0,variant:"outlined",onChange:e=>{w(e.target.value)}},(0,m.FU)("name",v),{InputProps:{className:t.root},disabled:W})))),a.createElement("div",{className:t.formContent},a.createElement(s.Z.Group,{className:t.group},a.createElement(s.Z.Label,{className:t.body2},e("signUp.form.mobile")),a.createElement(i.Z,x({className:t.formControl,placeholder:e("signUp.form.mobileLabel"),required:!0,variant:"outlined",onChange:e=>{R(e.target.value)}},(0,m.FU)("phone",v),{InputProps:{className:t.root},disabled:W}))),a.createElement(s.Z.Group,{className:t.group},a.createElement(s.Z.Label,{className:t.body2},e("signUp.form.email")),a.createElement(i.Z,x({className:t.formControl,id:"email",type:"email",placeholder:e("signUp.form.emailLabel"),required:!0,variant:"outlined",onChange:e=>{L(e.target.value)}},(0,m.FU)("email",v),{InputProps:{className:t.root},disabled:W})))),a.createElement("div",{className:t.formContent},a.createElement(s.Z.Group,{className:t.group},a.createElement(s.Z.Label,{className:t.body2},e("signUp.form.mdp")),a.createElement(i.Z,x({className:t.formControl,type:"password",placeholder:e("signUp.form.mdpLabel"),required:!0,variant:"outlined",onChange:e=>{z(e.target.value)}},(0,m.FU)("password",v),{InputProps:{className:t.root},disabled:W}))),a.createElement(s.Z.Group,{className:t.group},a.createElement(s.Z.Label,{className:t.body2},e("signUp.form.mdpCheck")),a.createElement(i.Z,x({className:t.formControl,type:"password",placeholder:e("signUp.form.mdpCheckLabel"),required:!0,onBlur:B,variant:"outlined",onChange:e=>{A(e.target.value)}},(0,m.FU)("repeat_password",v),{InputProps:{className:t.root},disabled:W})))),a.createElement(s.Z.Group,{controlId:"exampleTextFieldTextarea1",className:t.group},a.createElement(s.Z.Label,{className:t.body2},e("signUp.form.sector")),a.createElement(i.Z,x({id:"outlined-multiline-static",multiline:!0,className:t.textarea,variant:"outlined",as:"textarea",rows:10,placeholder:e("signUp.form.sectorLabel"),required:!0,onChange:e=>{G(e.target.value)}},(0,m.FU)("message",v),{InputProps:{className:t.rootArea},disabled:W}))),a.createElement(p.Z,{className:t.submit,type:"button",onClick:e=>{e.preventDefault(),M(!0),console.log(_),B()?d().post("/api/store_contact/",{brand:b,username:S,name:N,surname:C,phone:D,message:q,email:T,password:I,lang:F},{"Content-Type":"application/json",Accept:"application/json"}).then(((e,r)=>{console.log(e.data),201===e.status?(v={},O(!0),M(!0),console.log("okayyy")):(v=e.data,j()),M(!1)})):M(!1)}},e("send"))))))}},7798:(e,r,t)=>{"use strict";function a(e,r){if(void 0!==r[e])return console.log(r[e]),{error:!0,helperText:r[e]}}t.d(r,{FU:()=>a})},4043:(e,r,t)=>{"use strict";t.d(r,{Z:()=>n});var a=t(7294),o=t(5354);function n(e){const{url:r}=e,t=(0,o.Z)();return a.createElement(a.Fragment,null,a.createElement("img",{className:t.img,src:"/static/images/mockup_iphone_vide.png"}),a.createElement("div",{className:t.contentVideo},a.createElement("video",{className:t.video1,autoPlay:!0,loop:!0,muted:!0},a.createElement("source",{src:r,type:"video/mp4"}))))}},5354:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});const a=(0,t(1120).Z)((e=>({container:{backgroundColor:"#FAFAFA",display:"flex",flexDirection:"column",paddingTop:"5rem",[e.breakpoints.up("sm")]:{alignItems:"center",marginTop:"9vh",paddingTop:"0"},[e.breakpoints.up("md")]:{marginTop:"0vh"}},concept:{padding:"15vh 2.5rem",[e.breakpoints.up("sm")]:{padding:"0 5rem",display:"flex",alignItems:"center"},[e.breakpoints.up("md")]:{padding:"10rem 7rem"},[e.breakpoints.up("lg")]:{padding:"10rem 12rem"},[e.breakpoints.up("xl")]:{padding:"10rem 30rem"}},projectIdea:{padding:"15vh 2.5rem",backgroundColor:"#FFFFFF",[e.breakpoints.up("sm")]:{display:"flex",flexDirection:"row-reverse",padding:" 5rem",alignItems:"center"},[e.breakpoints.up("md")]:{padding:"10rem 5rem"},[e.breakpoints.up("lg")]:{padding:"10rem 13rem"},[e.breakpoints.up("xl")]:{padding:"10rem 30rem"}},addonapp:{padding:e.spacing(5),backgroundColor:"#FAFAFA",[e.breakpoints.up("sm")]:{padding:"5rem"},[e.breakpoints.up("md")]:{padding:"10rem"}},localShopping:{padding:"15vh 2.5rem",backgroundColor:"#FFFFFF",[e.breakpoints.up("sm")]:{display:"flex",flexDirection:"row-reverse",padding:"0rem 5rem",alignItems:"center"},[e.breakpoints.up("md")]:{padding:"10rem 7rem"},[e.breakpoints.up("lg")]:{padding:"10rem 10rem"},[e.breakpoints.up("xl")]:{padding:"10rem 30rem"}},row:{flexDirection:"row",display:"flex",alignItems:"center"},iconApp:{height:"5rem",width:"5rem",borderRadius:"1.5rem",boxShadow:"0px 0px 10px 2px lightgrey",padding:"10px 15px",backgroundColor:"white",marginRight:"1rem"},h1:{fontFamily:"Poppins",fontWeight:"bold",color:"#41455c",fontSize:"2.8rem",[e.breakpoints.up("sm")]:{fontSize:"3rem"},[e.breakpoints.up("md")]:{fontSize:"5rem"}},h2:{fontFamily:"Poppins",fontWeight:"bold",marginBottom:"8rem",color:"#41455c",fontSize:"1.2rem",[e.breakpoints.up("sm")]:{fontSize:"1.2rem"},[e.breakpoints.up("md")]:{marginTop:"-10rem",fontSize:"1.2rem"}},h3:{fontFamily:"Poppins",margin:"2rem 0 2rem 0",fontWeight:"bold",color:"#41455c",fontSize:"2.8rem",[e.breakpoints.up("sm")]:{width:"75%"},[e.breakpoints.up("sm")]:{width:"50%"}},body1:{fontFamily:"Poppins",margin:"2rem 0 0 0",fontSize:"0.8rem",color:"#41455c",lineHeight:"1rem",[e.breakpoints.up("sm")]:{lineHeight:"1.2rem",width:"80%"}},body2:{fontFamily:"Poppins",fontSize:"0.8rem",color:"#41455c",lineHeight:"1rem",marginTop:"0.5rem"},img:{zIndex:"2",height:"500px",[e.breakpoints.up("sm")]:{height:"400px",marginLeft:"0"},[e.breakpoints.up("md")]:{height:"500px"}},contentVideo:{background:"FFFFFEF",position:"absolute",height:"475px",width:"225px",borderRadius:"2rem",marginTop:"15px"},video1:{height:"470px",marginTop:"8px",marginLeft:"8px",borderRadius:"2rem",width:"215px",position:"absolute",[e.breakpoints.up("sm")]:{height:"355px"},[e.breakpoints.up("md")]:{height:"470px"}},video2:{height:"475px",marginTop:"12px",marginLeft:"9px",borderRadius:"2rem",width:"210px",position:"absolute",[e.breakpoints.up("sm")]:{height:"351px"},[e.breakpoints.up("md")]:{height:"475px"}},video3:{height:"475px",marginTop:"8px",marginLeft:"9px",borderRadius:"2rem",width:"210px",position:"absolute",[e.breakpoints.up("sm")]:{height:"355px"},[e.breakpoints.up("md")]:{height:"470px"}},discover:{padding:"15vh 2.5rem",backgroundColor:"#FAFAFA",[e.breakpoints.up("sm")]:{display:"flex",flexDirection:"row",padding:"0rem 5rem",alignItems:"center"},[e.breakpoints.up("md")]:{padding:"10rem 7rem"},[e.breakpoints.up("lg")]:{padding:"10rem 12rem"},[e.breakpoints.up("xl")]:{padding:"10rem 30rem"}},btnApp:{marginTop:"-3.2rem"}})))}}]);