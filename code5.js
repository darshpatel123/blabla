gdjs.ChatCode = {};
gdjs.ChatCode.GDSendButtonObjects1_1final = [];

gdjs.ChatCode.repeatCount2 = 0;

gdjs.ChatCode.repeatIndex2 = 0;

gdjs.ChatCode.stopDoWhile4 = false;

gdjs.ChatCode.GDChatObjects1= [];
gdjs.ChatCode.GDChatObjects2= [];
gdjs.ChatCode.GDChatObjects3= [];
gdjs.ChatCode.GDChatObjects4= [];
gdjs.ChatCode.GDChatBoxObjects1= [];
gdjs.ChatCode.GDChatBoxObjects2= [];
gdjs.ChatCode.GDChatBoxObjects3= [];
gdjs.ChatCode.GDChatBoxObjects4= [];
gdjs.ChatCode.GDChatBoxSpriteObjects1= [];
gdjs.ChatCode.GDChatBoxSpriteObjects2= [];
gdjs.ChatCode.GDChatBoxSpriteObjects3= [];
gdjs.ChatCode.GDChatBoxSpriteObjects4= [];
gdjs.ChatCode.GDEntrySpriteObjects1= [];
gdjs.ChatCode.GDEntrySpriteObjects2= [];
gdjs.ChatCode.GDEntrySpriteObjects3= [];
gdjs.ChatCode.GDEntrySpriteObjects4= [];
gdjs.ChatCode.GDSendButtonObjects1= [];
gdjs.ChatCode.GDSendButtonObjects2= [];
gdjs.ChatCode.GDSendButtonObjects3= [];
gdjs.ChatCode.GDSendButtonObjects4= [];
gdjs.ChatCode.GDEntryTextObjects1= [];
gdjs.ChatCode.GDEntryTextObjects2= [];
gdjs.ChatCode.GDEntryTextObjects3= [];
gdjs.ChatCode.GDEntryTextObjects4= [];
gdjs.ChatCode.GDEntryObjects1= [];
gdjs.ChatCode.GDEntryObjects2= [];
gdjs.ChatCode.GDEntryObjects3= [];
gdjs.ChatCode.GDEntryObjects4= [];
gdjs.ChatCode.GDuserObjects1= [];
gdjs.ChatCode.GDuserObjects2= [];
gdjs.ChatCode.GDuserObjects3= [];
gdjs.ChatCode.GDuserObjects4= [];

gdjs.ChatCode.conditionTrue_0 = {val:false};
gdjs.ChatCode.condition0IsTrue_0 = {val:false};
gdjs.ChatCode.condition1IsTrue_0 = {val:false};
gdjs.ChatCode.condition2IsTrue_0 = {val:false};
gdjs.ChatCode.condition3IsTrue_0 = {val:false};
gdjs.ChatCode.conditionTrue_1 = {val:false};
gdjs.ChatCode.condition0IsTrue_1 = {val:false};
gdjs.ChatCode.condition1IsTrue_1 = {val:false};
gdjs.ChatCode.condition2IsTrue_1 = {val:false};
gdjs.ChatCode.condition3IsTrue_1 = {val:false};
gdjs.ChatCode.conditionTrue_2 = {val:false};
gdjs.ChatCode.condition0IsTrue_2 = {val:false};
gdjs.ChatCode.condition1IsTrue_2 = {val:false};
gdjs.ChatCode.condition2IsTrue_2 = {val:false};
gdjs.ChatCode.condition3IsTrue_2 = {val:false};


gdjs.ChatCode.mapOfGDgdjs_46ChatCode_46GDuserObjects3Objects = Hashtable.newFrom({"user": gdjs.ChatCode.GDuserObjects3});
gdjs.ChatCode.eventsList0 = function(runtimeScene) {

};gdjs.ChatCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.ChatCode.stopDoWhile4 = false;
do {gdjs.copyArray(gdjs.ChatCode.GDuserObjects3, gdjs.ChatCode.GDuserObjects4);

gdjs.ChatCode.condition0IsTrue_0.val = false;
{
{gdjs.ChatCode.conditionTrue_1 = gdjs.ChatCode.condition0IsTrue_0;
gdjs.ChatCode.conditionTrue_1.val = ((( gdjs.ChatCode.GDuserObjects4.length === 0 ) ? 0 :gdjs.ChatCode.GDuserObjects4[0].getWidth()) > 110);
}
}if (gdjs.ChatCode.condition0IsTrue_0.val) {
if (true) {
{for(var i = 0, len = gdjs.ChatCode.GDuserObjects4.length ;i < len;++i) {
    gdjs.ChatCode.GDuserObjects4[i].setCharacterSize(gdjs.ChatCode.GDuserObjects4[i].getCharacterSize() - (1));
}
}
{ //Subevents: 
gdjs.ChatCode.eventsList0(runtimeScene);} //Subevents end.
}
} else gdjs.ChatCode.stopDoWhile4 = true; 
} while ( !gdjs.ChatCode.stopDoWhile4 );

}


};gdjs.ChatCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.ChatCode.GDuserObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ChatCode.mapOfGDgdjs_46ChatCode_46GDuserObjects3Objects, 674, 55 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")) * 30, "");
}{for(var i = 0, len = gdjs.ChatCode.GDuserObjects3.length ;i < len;++i) {
    gdjs.ChatCode.GDuserObjects3[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("PlayerCount"))).getChild("username")));
}
}{for(var i = 0, len = gdjs.ChatCode.GDuserObjects3.length ;i < len;++i) {
    gdjs.ChatCode.GDuserObjects3[i].returnVariable(gdjs.ChatCode.GDuserObjects3[i].getVariables().get("id")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("PlayerCount"))).getChild("id")));
}
}{for(var i = 0, len = gdjs.ChatCode.GDuserObjects3.length ;i < len;++i) {
    gdjs.ChatCode.GDuserObjects3[i].setZOrder(1);
}
}{runtimeScene.getVariables().get("PlayerCount").add(1);
}
{ //Subevents
gdjs.ChatCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.ChatCode.eventsList3 = function(runtimeScene) {

{


{
{runtimeScene.getVariables().get("PlayerCount").setNumber(0);
}}

}


{



}


{


gdjs.ChatCode.repeatCount2 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(0));
for(gdjs.ChatCode.repeatIndex2 = 0;gdjs.ChatCode.repeatIndex2 < gdjs.ChatCode.repeatCount2;++gdjs.ChatCode.repeatIndex2) {

if (true)
{

{ //Subevents: 
gdjs.ChatCode.eventsList2(runtimeScene);} //Subevents end.
}
}

}


};gdjs.ChatCode.eventsList4 = function(runtimeScene) {

{


gdjs.ChatCode.condition0IsTrue_0.val = false;
{
gdjs.ChatCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ChatCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ChatCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.ChatCode.mapOfGDgdjs_46ChatCode_46GDSendButtonObjects2Objects = Hashtable.newFrom({"SendButton": gdjs.ChatCode.GDSendButtonObjects2});
gdjs.ChatCode.eventsList5 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Entry"), gdjs.ChatCode.GDEntryObjects2);
gdjs.copyArray(runtimeScene.getObjects("EntryText"), gdjs.ChatCode.GDEntryTextObjects2);
{for(var i = 0, len = gdjs.ChatCode.GDEntryObjects2.length ;i < len;++i) {
    gdjs.ChatCode.GDEntryObjects2[i].setString(gdjs.evtsExt__Sanitizer__trim.func(runtimeScene, (gdjs.ChatCode.GDEntryObjects2[i].getString()), 50, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.ChatCode.GDEntryTextObjects2.length ;i < len;++i) {
    gdjs.ChatCode.GDEntryTextObjects2[i].setString((( gdjs.ChatCode.GDEntryObjects2.length === 0 ) ? "" :gdjs.ChatCode.GDEntryObjects2[0].getString()));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Entry"), gdjs.ChatCode.GDEntryObjects1);
gdjs.ChatCode.GDSendButtonObjects1.length = 0;


gdjs.ChatCode.condition0IsTrue_0.val = false;
gdjs.ChatCode.condition1IsTrue_0.val = false;
gdjs.ChatCode.condition2IsTrue_0.val = false;
{
{gdjs.ChatCode.conditionTrue_1 = gdjs.ChatCode.condition0IsTrue_0;
gdjs.ChatCode.conditionTrue_1.val = (gdjs.evtTools.string.strLen(gdjs.evtsExt__Sanitizer__sanitize.func(runtimeScene, (( gdjs.ChatCode.GDEntryObjects1.length === 0 ) ? "" :gdjs.ChatCode.GDEntryObjects1[0].getString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) != 0);
}
}if ( gdjs.ChatCode.condition0IsTrue_0.val ) {
{
{gdjs.ChatCode.conditionTrue_1 = gdjs.ChatCode.condition1IsTrue_0;
gdjs.ChatCode.GDSendButtonObjects1_1final.length = 0;gdjs.ChatCode.condition0IsTrue_1.val = false;
gdjs.ChatCode.condition1IsTrue_1.val = false;
{
gdjs.ChatCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if( gdjs.ChatCode.condition0IsTrue_1.val ) {
    gdjs.ChatCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("SendButton"), gdjs.ChatCode.GDSendButtonObjects2);
{gdjs.ChatCode.conditionTrue_2 = gdjs.ChatCode.condition1IsTrue_1;
gdjs.ChatCode.condition0IsTrue_2.val = false;
gdjs.ChatCode.condition1IsTrue_2.val = false;
{
gdjs.ChatCode.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ChatCode.condition0IsTrue_2.val ) {
{
gdjs.ChatCode.condition1IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.ChatCode.mapOfGDgdjs_46ChatCode_46GDSendButtonObjects2Objects, runtimeScene, true, false);
}}
gdjs.ChatCode.conditionTrue_2.val = true && gdjs.ChatCode.condition0IsTrue_2.val && gdjs.ChatCode.condition1IsTrue_2.val;
}
if( gdjs.ChatCode.condition1IsTrue_1.val ) {
    gdjs.ChatCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.ChatCode.GDSendButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.ChatCode.GDSendButtonObjects1_1final.indexOf(gdjs.ChatCode.GDSendButtonObjects2[j]) === -1 )
            gdjs.ChatCode.GDSendButtonObjects1_1final.push(gdjs.ChatCode.GDSendButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.ChatCode.GDSendButtonObjects1_1final, gdjs.ChatCode.GDSendButtonObjects1);
}
}
}if ( gdjs.ChatCode.condition1IsTrue_0.val ) {
{
{gdjs.ChatCode.conditionTrue_1 = gdjs.ChatCode.condition2IsTrue_0;
gdjs.ChatCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12927324);
}
}}
}
if (gdjs.ChatCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ChatBox"), gdjs.ChatCode.GDChatBoxObjects1);
/* Reuse gdjs.ChatCode.GDEntryObjects1 */
{for(var i = 0, len = gdjs.ChatCode.GDChatBoxObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDChatBoxObjects1[i].setString(gdjs.ChatCode.GDChatBoxObjects1[i].getString() + (gdjs.evtTools.string.newLine() + "You: " + gdjs.evtsExt__Sanitizer__removeNewLines.func(runtimeScene, (( gdjs.ChatCode.GDEntryObjects1.length === 0 ) ? "" :gdjs.ChatCode.GDEntryObjects1[0].getString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{gdjs.evtTools.p2p.sendDataToAll("message", (( gdjs.ChatCode.GDEntryObjects1.length === 0 ) ? "" :gdjs.ChatCode.GDEntryObjects1[0].getString()));
}{for(var i = 0, len = gdjs.ChatCode.GDEntryObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDEntryObjects1[i].setString("");
}
}}

}


};gdjs.ChatCode.eventsList6 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.ChatCode.GDuserObjects1);

gdjs.ChatCode.condition0IsTrue_0.val = false;
gdjs.ChatCode.condition1IsTrue_0.val = false;
{
gdjs.ChatCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("message", false);
}if ( gdjs.ChatCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.ChatCode.GDuserObjects1.length;i<l;++i) {
    if ( gdjs.ChatCode.GDuserObjects1[i].getVariableString(gdjs.ChatCode.GDuserObjects1[i].getVariables().get("id")) == gdjs.evtTools.p2p.getEventSender("message") ) {
        gdjs.ChatCode.condition1IsTrue_0.val = true;
        gdjs.ChatCode.GDuserObjects1[k] = gdjs.ChatCode.GDuserObjects1[i];
        ++k;
    }
}
gdjs.ChatCode.GDuserObjects1.length = k;}}
if (gdjs.ChatCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ChatBox"), gdjs.ChatCode.GDChatBoxObjects1);
/* Reuse gdjs.ChatCode.GDuserObjects1 */
{for(var i = 0, len = gdjs.ChatCode.GDChatBoxObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDChatBoxObjects1[i].setString(gdjs.ChatCode.GDChatBoxObjects1[i].getString() + (gdjs.evtTools.string.newLine() + (( gdjs.ChatCode.GDuserObjects1.length === 0 ) ? "" :gdjs.ChatCode.GDuserObjects1[0].getString()) + ": " + gdjs.evtsExt__Sanitizer__removeNewLines.func(runtimeScene, gdjs.evtTools.p2p.getEventData("message"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


};gdjs.ChatCode.mapOfGDgdjs_46ChatCode_46GDuserObjects1Objects = Hashtable.newFrom({"user": gdjs.ChatCode.GDuserObjects1});
gdjs.ChatCode.eventsList7 = function(runtimeScene) {

{

/* Reuse gdjs.ChatCode.GDuserObjects1 */

gdjs.ChatCode.condition0IsTrue_0.val = false;
gdjs.ChatCode.condition1IsTrue_0.val = false;
{
gdjs.ChatCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.ChatCode.mapOfGDgdjs_46ChatCode_46GDuserObjects1Objects);
}if ( gdjs.ChatCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.ChatCode.GDuserObjects1.length;i<l;++i) {
    if ( gdjs.ChatCode.GDuserObjects1[i].getY() > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("lastDisconnectedY")) ) {
        gdjs.ChatCode.condition1IsTrue_0.val = true;
        gdjs.ChatCode.GDuserObjects1[k] = gdjs.ChatCode.GDuserObjects1[i];
        ++k;
    }
}
gdjs.ChatCode.GDuserObjects1.length = k;}}
if (gdjs.ChatCode.condition1IsTrue_0.val) {
/* Reuse gdjs.ChatCode.GDuserObjects1 */
{for(var i = 0, len = gdjs.ChatCode.GDuserObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDuserObjects1[i].setY(gdjs.ChatCode.GDuserObjects1[i].getY() - (30));
}
}}

}


};gdjs.ChatCode.eventsList8 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("ChatBox"), gdjs.ChatCode.GDChatBoxObjects2);

gdjs.ChatCode.condition0IsTrue_0.val = false;
{
{gdjs.ChatCode.conditionTrue_1 = gdjs.ChatCode.condition0IsTrue_0;
gdjs.ChatCode.conditionTrue_1.val = (gdjs.evtsExt__Sanitizer__countNewLines.func(runtimeScene, (( gdjs.ChatCode.GDChatBoxObjects2.length === 0 ) ? "" :gdjs.ChatCode.GDChatBoxObjects2[0].getString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) >= 28);
}
}if (gdjs.ChatCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ChatCode.GDChatBoxObjects2 */
{for(var i = 0, len = gdjs.ChatCode.GDChatBoxObjects2.length ;i < len;++i) {
    gdjs.ChatCode.GDChatBoxObjects2[i].setString(gdjs.evtsExt__Sanitizer__removeFirstLine.func(runtimeScene, (gdjs.ChatCode.GDChatBoxObjects2[i].getString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.ChatCode.GDuserObjects1);

gdjs.ChatCode.condition0IsTrue_0.val = false;
gdjs.ChatCode.condition1IsTrue_0.val = false;
{
gdjs.ChatCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onDisconnect();
}if ( gdjs.ChatCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.ChatCode.GDuserObjects1.length;i<l;++i) {
    if ( gdjs.ChatCode.GDuserObjects1[i].getVariableString(gdjs.ChatCode.GDuserObjects1[i].getVariables().get("id")) == gdjs.evtTools.p2p.getDisconnectedPeer() ) {
        gdjs.ChatCode.condition1IsTrue_0.val = true;
        gdjs.ChatCode.GDuserObjects1[k] = gdjs.ChatCode.GDuserObjects1[i];
        ++k;
    }
}
gdjs.ChatCode.GDuserObjects1.length = k;}}
if (gdjs.ChatCode.condition1IsTrue_0.val) {
/* Reuse gdjs.ChatCode.GDuserObjects1 */
{runtimeScene.getVariables().get("lastDisconnectedY").setNumber((( gdjs.ChatCode.GDuserObjects1.length === 0 ) ? 0 :gdjs.ChatCode.GDuserObjects1[0].getY()));
}{for(var i = 0, len = gdjs.ChatCode.GDuserObjects1.length ;i < len;++i) {
    gdjs.ChatCode.GDuserObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.ChatCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.ChatCode.eventsList9 = function(runtimeScene) {

{


gdjs.ChatCode.eventsList4(runtimeScene);
}


{


gdjs.ChatCode.eventsList5(runtimeScene);
}


{


gdjs.ChatCode.eventsList6(runtimeScene);
}


{


gdjs.ChatCode.eventsList8(runtimeScene);
}


};

gdjs.ChatCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ChatCode.GDChatObjects1.length = 0;
gdjs.ChatCode.GDChatObjects2.length = 0;
gdjs.ChatCode.GDChatObjects3.length = 0;
gdjs.ChatCode.GDChatObjects4.length = 0;
gdjs.ChatCode.GDChatBoxObjects1.length = 0;
gdjs.ChatCode.GDChatBoxObjects2.length = 0;
gdjs.ChatCode.GDChatBoxObjects3.length = 0;
gdjs.ChatCode.GDChatBoxObjects4.length = 0;
gdjs.ChatCode.GDChatBoxSpriteObjects1.length = 0;
gdjs.ChatCode.GDChatBoxSpriteObjects2.length = 0;
gdjs.ChatCode.GDChatBoxSpriteObjects3.length = 0;
gdjs.ChatCode.GDChatBoxSpriteObjects4.length = 0;
gdjs.ChatCode.GDEntrySpriteObjects1.length = 0;
gdjs.ChatCode.GDEntrySpriteObjects2.length = 0;
gdjs.ChatCode.GDEntrySpriteObjects3.length = 0;
gdjs.ChatCode.GDEntrySpriteObjects4.length = 0;
gdjs.ChatCode.GDSendButtonObjects1.length = 0;
gdjs.ChatCode.GDSendButtonObjects2.length = 0;
gdjs.ChatCode.GDSendButtonObjects3.length = 0;
gdjs.ChatCode.GDSendButtonObjects4.length = 0;
gdjs.ChatCode.GDEntryTextObjects1.length = 0;
gdjs.ChatCode.GDEntryTextObjects2.length = 0;
gdjs.ChatCode.GDEntryTextObjects3.length = 0;
gdjs.ChatCode.GDEntryTextObjects4.length = 0;
gdjs.ChatCode.GDEntryObjects1.length = 0;
gdjs.ChatCode.GDEntryObjects2.length = 0;
gdjs.ChatCode.GDEntryObjects3.length = 0;
gdjs.ChatCode.GDEntryObjects4.length = 0;
gdjs.ChatCode.GDuserObjects1.length = 0;
gdjs.ChatCode.GDuserObjects2.length = 0;
gdjs.ChatCode.GDuserObjects3.length = 0;
gdjs.ChatCode.GDuserObjects4.length = 0;

gdjs.ChatCode.eventsList9(runtimeScene);
return;

}

gdjs['ChatCode'] = gdjs.ChatCode;
