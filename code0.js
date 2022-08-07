gdjs.StartCode = {};
gdjs.StartCode.GDwelcomeObjects1= [];
gdjs.StartCode.GDwelcomeObjects2= [];
gdjs.StartCode.GDwelcomeObjects3= [];
gdjs.StartCode.GDWaitObjects1= [];
gdjs.StartCode.GDWaitObjects2= [];
gdjs.StartCode.GDWaitObjects3= [];
gdjs.StartCode.GDBrokerObjects1= [];
gdjs.StartCode.GDBrokerObjects2= [];
gdjs.StartCode.GDBrokerObjects3= [];
gdjs.StartCode.GDselectspriteObjects1= [];
gdjs.StartCode.GDselectspriteObjects2= [];
gdjs.StartCode.GDselectspriteObjects3= [];
gdjs.StartCode.GDInfoObjects1= [];
gdjs.StartCode.GDInfoObjects2= [];
gdjs.StartCode.GDInfoObjects3= [];
gdjs.StartCode.GDinputSpriteObjects1= [];
gdjs.StartCode.GDinputSpriteObjects2= [];
gdjs.StartCode.GDinputSpriteObjects3= [];
gdjs.StartCode.GDTextEntryObjects1= [];
gdjs.StartCode.GDTextEntryObjects2= [];
gdjs.StartCode.GDTextEntryObjects3= [];
gdjs.StartCode.GDUsernameObjects1= [];
gdjs.StartCode.GDUsernameObjects2= [];
gdjs.StartCode.GDUsernameObjects3= [];

gdjs.StartCode.conditionTrue_0 = {val:false};
gdjs.StartCode.condition0IsTrue_0 = {val:false};
gdjs.StartCode.condition1IsTrue_0 = {val:false};
gdjs.StartCode.condition2IsTrue_0 = {val:false};
gdjs.StartCode.conditionTrue_1 = {val:false};
gdjs.StartCode.condition0IsTrue_1 = {val:false};
gdjs.StartCode.condition1IsTrue_1 = {val:false};
gdjs.StartCode.condition2IsTrue_1 = {val:false};


gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDselectspriteObjects1Objects = Hashtable.newFrom({"selectsprite": gdjs.StartCode.GDselectspriteObjects1});
gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Username"), gdjs.StartCode.GDUsernameObjects2);
{runtimeScene.getGame().getVariables().get("username").setString((( gdjs.StartCode.GDUsernameObjects2.length === 0 ) ? "" :gdjs.StartCode.GDUsernameObjects2[0].getString()));
}}

}


{

gdjs.copyArray(gdjs.StartCode.GDselectspriteObjects1, gdjs.StartCode.GDselectspriteObjects2);


gdjs.StartCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartCode.GDselectspriteObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDselectspriteObjects2[i].getVariableNumber(gdjs.StartCode.GDselectspriteObjects2[i].getVariables().get("id")) == 1 ) {
        gdjs.StartCode.condition0IsTrue_0.val = true;
        gdjs.StartCode.GDselectspriteObjects2[k] = gdjs.StartCode.GDselectspriteObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDselectspriteObjects2.length = k;}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Broker", false);
}}

}


{

/* Reuse gdjs.StartCode.GDselectspriteObjects1 */

gdjs.StartCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartCode.GDselectspriteObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDselectspriteObjects1[i].getVariableNumber(gdjs.StartCode.GDselectspriteObjects1[i].getVariables().get("id")) == 2 ) {
        gdjs.StartCode.condition0IsTrue_0.val = true;
        gdjs.StartCode.GDselectspriteObjects1[k] = gdjs.StartCode.GDselectspriteObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDselectspriteObjects1.length = k;}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Wait", false);
}}

}


};gdjs.StartCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("selectsprite"), gdjs.StartCode.GDselectspriteObjects1);

gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDselectspriteObjects1Objects, runtimeScene, true, false);
}if (gdjs.StartCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.StartCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.StartCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TextEntry"), gdjs.StartCode.GDTextEntryObjects1);

gdjs.StartCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartCode.GDTextEntryObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDTextEntryObjects1[i].isActivated() ) {
        gdjs.StartCode.condition0IsTrue_0.val = true;
        gdjs.StartCode.GDTextEntryObjects1[k] = gdjs.StartCode.GDTextEntryObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDTextEntryObjects1.length = k;}if (gdjs.StartCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartCode.GDTextEntryObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Username"), gdjs.StartCode.GDUsernameObjects1);
{for(var i = 0, len = gdjs.StartCode.GDUsernameObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDUsernameObjects1[i].setString((( gdjs.StartCode.GDTextEntryObjects1.length === 0 ) ? "" :gdjs.StartCode.GDTextEntryObjects1[0].getString()));
}
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
{gdjs.StartCode.conditionTrue_1 = gdjs.StartCode.condition1IsTrue_0;
gdjs.StartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11624484);
}
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.StartCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDwelcomeObjects1.length = 0;
gdjs.StartCode.GDwelcomeObjects2.length = 0;
gdjs.StartCode.GDwelcomeObjects3.length = 0;
gdjs.StartCode.GDWaitObjects1.length = 0;
gdjs.StartCode.GDWaitObjects2.length = 0;
gdjs.StartCode.GDWaitObjects3.length = 0;
gdjs.StartCode.GDBrokerObjects1.length = 0;
gdjs.StartCode.GDBrokerObjects2.length = 0;
gdjs.StartCode.GDBrokerObjects3.length = 0;
gdjs.StartCode.GDselectspriteObjects1.length = 0;
gdjs.StartCode.GDselectspriteObjects2.length = 0;
gdjs.StartCode.GDselectspriteObjects3.length = 0;
gdjs.StartCode.GDInfoObjects1.length = 0;
gdjs.StartCode.GDInfoObjects2.length = 0;
gdjs.StartCode.GDInfoObjects3.length = 0;
gdjs.StartCode.GDinputSpriteObjects1.length = 0;
gdjs.StartCode.GDinputSpriteObjects2.length = 0;
gdjs.StartCode.GDinputSpriteObjects3.length = 0;
gdjs.StartCode.GDTextEntryObjects1.length = 0;
gdjs.StartCode.GDTextEntryObjects2.length = 0;
gdjs.StartCode.GDTextEntryObjects3.length = 0;
gdjs.StartCode.GDUsernameObjects1.length = 0;
gdjs.StartCode.GDUsernameObjects2.length = 0;
gdjs.StartCode.GDUsernameObjects3.length = 0;

gdjs.StartCode.eventsList2(runtimeScene);
return;

}

gdjs['StartCode'] = gdjs.StartCode;
