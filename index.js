const rr="hi"
const dat=document.querySelector("#yes")
dat.innerHTML=rr
console.log("hhsicihsdic");

chrome.windows.getAll({populate:true}, getAllOpenWindows);

function getAllOpenWindows(winData) {
  console.log(winData);
  
  var tabs = [];
  for (var i in winData) {
    // if (winData[i].focused === true) {
        var winTabs = winData[i].tabs;
        var totTabs = winTabs.length;
        for (var j=0; j<totTabs;j++) {
          tabs.push(winTabs[j].url);
        }
    // }
  }
  console.log(tabs);
  const r="hiii"
  const data=document.querySelector("#yes")
//   const data="hi"
  data.innerHTML=tabs.length+" "+tabs[0]
}