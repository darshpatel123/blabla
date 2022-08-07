gdjs.WaitCode = {};
gdjs.WaitCode.stopDoWhile4 = false;

gdjs.WaitCode.GDWelcomeTextObjects1= [];
gdjs.WaitCode.GDWelcomeTextObjects2= [];
gdjs.WaitCode.GDWelcomeTextObjects3= [];
gdjs.WaitCode.GDWelcomeTextObjects4= [];
gdjs.WaitCode.GDidTextObjects1= [];
gdjs.WaitCode.GDidTextObjects2= [];
gdjs.WaitCode.GDidTextObjects3= [];
gdjs.WaitCode.GDidTextObjects4= [];
gdjs.WaitCode.GDCopyButtonObjects1= [];
gdjs.WaitCode.GDCopyButtonObjects2= [];
gdjs.WaitCode.GDCopyButtonObjects3= [];
gdjs.WaitCode.GDCopyButtonObjects4= [];
gdjs.WaitCode.GDCopyTextObjects1= [];
gdjs.WaitCode.GDCopyTextObjects2= [];
gdjs.WaitCode.GDCopyTextObjects3= [];
gdjs.WaitCode.GDCopyTextObjects4= [];
gdjs.WaitCode.GDErrorTextObjects1= [];
gdjs.WaitCode.GDErrorTextObjects2= [];
gdjs.WaitCode.GDErrorTextObjects3= [];
gdjs.WaitCode.GDErrorTextObjects4= [];
gdjs.WaitCode.GDStatusObjects1= [];
gdjs.WaitCode.GDStatusObjects2= [];
gdjs.WaitCode.GDStatusObjects3= [];
gdjs.WaitCode.GDStatusObjects4= [];

gdjs.WaitCode.conditionTrue_0 = {val:false};
gdjs.WaitCode.condition0IsTrue_0 = {val:false};
gdjs.WaitCode.condition1IsTrue_0 = {val:false};
gdjs.WaitCode.condition2IsTrue_0 = {val:false};
gdjs.WaitCode.conditionTrue_1 = {val:false};
gdjs.WaitCode.condition0IsTrue_1 = {val:false};
gdjs.WaitCode.condition1IsTrue_1 = {val:false};
gdjs.WaitCode.condition2IsTrue_1 = {val:false};


gdjs.WaitCode.eventsList0 = function(runtimeScene) {

{



}


{



}


{



}


{


{
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("ErrorText"), gdjs.WaitCode.GDErrorTextObjects2);
{for(var i = 0, len = gdjs.WaitCode.GDErrorTextObjects2.length ;i < len;++i) {
    gdjs.WaitCode.GDErrorTextObjects2[i].setString("");
}
}}

}


{



}


{


{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("FirstConnect"), true);
}}

}


};gdjs.WaitCode.eventsList1 = function(runtimeScene) {

{


gdjs.WaitCode.condition0IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.WaitCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WaitCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.WaitCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.WaitCode.condition0IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("FirstConnect"), false);
}if (gdjs.WaitCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.sendDataTo(gdjs.evtTools.p2p.getConnectedPeer(), "ok", "");
}}

}


{



}


{


gdjs.WaitCode.condition0IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("FirstConnect"), true);
}if (gdjs.WaitCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.sendDataTo(gdjs.evtTools.p2p.getConnectedPeer(), "ok", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("username")));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("FirstConnect"), false);
}}

}


};gdjs.WaitCode.eventsList3 = function(runtimeScene) {

};gdjs.WaitCode.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.WaitCode.stopDoWhile4 = false;
do {gdjs.WaitCode.condition0IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("PlayerCount"))).getChild("username")) == gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("username")));
}if (gdjs.WaitCode.condition0IsTrue_0.val) {
if (true) {
{runtimeScene.getVariables().get("PlayerCount").add(1);
}
{ //Subevents: 
gdjs.WaitCode.eventsList3(runtimeScene);} //Subevents end.
}
} else gdjs.WaitCode.stopDoWhile4 = true; 
} while ( !gdjs.WaitCode.stopDoWhile4 );

}


{



}


{


gdjs.WaitCode.condition0IsTrue_0.val = false;
{
{gdjs.WaitCode.conditionTrue_1 = gdjs.WaitCode.condition0IsTrue_0;
gdjs.WaitCode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")) + 1 < gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}if (gdjs.WaitCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Step").setNumber(2);
}}

}


{



}


{


gdjs.WaitCode.condition0IsTrue_0.val = false;
{
{gdjs.WaitCode.conditionTrue_1 = gdjs.WaitCode.condition0IsTrue_0;
gdjs.WaitCode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")) + 1 == gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}if (gdjs.WaitCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Step").setNumber(5);
}}

}


};gdjs.WaitCode.eventsList5 = function(runtimeScene) {

{


gdjs.WaitCode.condition0IsTrue_0.val = false;
{
{gdjs.WaitCode.conditionTrue_1 = gdjs.WaitCode.condition0IsTrue_0;
gdjs.WaitCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11653596);
}
}if (gdjs.WaitCode.condition0IsTrue_0.val) {
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)), runtimeScene.getGame().getVariables().getFromIndex(0));
}}

}


{



}


{


gdjs.WaitCode.condition0IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) != "n";
}if (gdjs.WaitCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WaitCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.WaitCode.eventsList6 = function(runtimeScene) {

{


{
{runtimeScene.getVariables().get("PlayerCount").add(1);
}}

}


{


{
{gdjs.evtTools.p2p.connect(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("PlayerCount"))).getChild("id")));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs.WaitCode.GDStatusObjects3);
{for(var i = 0, len = gdjs.WaitCode.GDStatusObjects3.length ;i < len;++i) {
    gdjs.WaitCode.GDStatusObjects3[i].setString("Connecting to other Players..." + gdjs.evtTools.string.newLine() + "connect to Player" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("PlayerCount")));
}
}}

}


{


{
{runtimeScene.getVariables().get("Step").setNumber(3);
}}

}


};gdjs.WaitCode.eventsList7 = function(runtimeScene) {

{



}


{


gdjs.WaitCode.condition0IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("ok", true);
}if (gdjs.WaitCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Step").setNumber(4);
}}

}


{



}


};gdjs.WaitCode.eventsList8 = function(runtimeScene) {

{



}


{


gdjs.WaitCode.condition0IsTrue_0.val = false;
{
{gdjs.WaitCode.conditionTrue_1 = gdjs.WaitCode.condition0IsTrue_0;
gdjs.WaitCode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")) + 1 < gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}if (gdjs.WaitCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Step").setNumber(2);
}}

}


{



}


{


gdjs.WaitCode.condition0IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Step")) == 4;
}if (gdjs.WaitCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Step").setNumber(5);
}}

}


};gdjs.WaitCode.eventsList9 = function(runtimeScene) {

{



}


{


{
{gdjs.evtTools.p2p.sendDataTo(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("0").getChild("id")), "ready", "");
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs.WaitCode.GDStatusObjects1);
{for(var i = 0, len = gdjs.WaitCode.GDStatusObjects1.length ;i < len;++i) {
    gdjs.WaitCode.GDStatusObjects1[i].setString("Game is READY!");
}
}}

}


};gdjs.WaitCode.eventsList10 = function(runtimeScene) {

{



}


{


gdjs.WaitCode.condition0IsTrue_0.val = false;
gdjs.WaitCode.condition1IsTrue_0.val = false;
{
{gdjs.WaitCode.conditionTrue_1 = gdjs.WaitCode.condition0IsTrue_0;
gdjs.WaitCode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PeerCount")) + 1 == gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}if ( gdjs.WaitCode.condition0IsTrue_0.val ) {
{
{gdjs.WaitCode.conditionTrue_1 = gdjs.WaitCode.condition1IsTrue_0;
gdjs.WaitCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11945924);
}
}}
if (gdjs.WaitCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.WaitCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.WaitCode.eventsList11 = function(runtimeScene) {

{



}


{



}


{


gdjs.WaitCode.condition0IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("ready", true);
}if (gdjs.WaitCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setString(gdjs.evtTools.p2p.getEventData("ready"));
}}

}


{



}


{


gdjs.WaitCode.condition0IsTrue_0.val = false;
gdjs.WaitCode.condition1IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)) != "n";
}if ( gdjs.WaitCode.condition0IsTrue_0.val ) {
{
{gdjs.WaitCode.conditionTrue_1 = gdjs.WaitCode.condition1IsTrue_0;
gdjs.WaitCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11652156);
}
}}
if (gdjs.WaitCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("Step").setNumber(1);
}}

}


{



}


{


gdjs.WaitCode.condition0IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Step")) == 1;
}if (gdjs.WaitCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WaitCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.WaitCode.condition0IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Step")) == 2;
}if (gdjs.WaitCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WaitCode.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.WaitCode.condition0IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Step")) == 3;
}if (gdjs.WaitCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WaitCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.WaitCode.condition0IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Step")) == 4;
}if (gdjs.WaitCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WaitCode.eventsList8(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.WaitCode.condition0IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Step")) == 5;
}if (gdjs.WaitCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WaitCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.WaitCode.eventsList12 = function(runtimeScene) {

{


gdjs.WaitCode.condition0IsTrue_0.val = false;
gdjs.WaitCode.condition1IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.isReady();
}if ( gdjs.WaitCode.condition0IsTrue_0.val ) {
{
{gdjs.WaitCode.conditionTrue_1 = gdjs.WaitCode.condition1IsTrue_0;
gdjs.WaitCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11638028);
}
}}
if (gdjs.WaitCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("idText"), gdjs.WaitCode.GDidTextObjects2);
{for(var i = 0, len = gdjs.WaitCode.GDidTextObjects2.length ;i < len;++i) {
    gdjs.WaitCode.GDidTextObjects2[i].setString(gdjs.evtTools.p2p.getCurrentId());
}
}}

}


{



}


{



}


{


gdjs.WaitCode.condition0IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onConnection();
}if (gdjs.WaitCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("PeerCount").add(1);
}
{ //Subevents
gdjs.WaitCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.WaitCode.condition0IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("ok", true);
}if (gdjs.WaitCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("PeerCount").add(1);
}}

}


{



}


{


gdjs.WaitCode.condition0IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("in", true);
}if (gdjs.WaitCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs.WaitCode.GDStatusObjects2);
{for(var i = 0, len = gdjs.WaitCode.GDStatusObjects2.length ;i < len;++i) {
    gdjs.WaitCode.GDStatusObjects2[i].setString("The Broker added you to the Game!" + gdjs.evtTools.string.newLine() + "Wait for the Broker to start the Game...");
}
}}

}


{



}


{


gdjs.WaitCode.condition0IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("restart", true);
}if (gdjs.WaitCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs.WaitCode.GDStatusObjects2);
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(0));
}{runtimeScene.getVariables().getFromIndex(0).setString("n");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("n");
}{for(var i = 0, len = gdjs.WaitCode.GDStatusObjects2.length ;i < len;++i) {
    gdjs.WaitCode.GDStatusObjects2[i].setString("A Player was Disconnected" + gdjs.evtTools.string.newLine() + "Wait for the Broker to start the Game...");
}
}{runtimeScene.getVariables().get("Step").setNumber(0);
}{runtimeScene.getVariables().get("PlayerCount").setNumber(1);
}}

}


{



}


{


gdjs.WaitCode.condition0IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("go", true);
}if (gdjs.WaitCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


{


gdjs.WaitCode.eventsList11(runtimeScene);
}


};gdjs.WaitCode.mapOfGDgdjs_46WaitCode_46GDCopyButtonObjects1Objects = Hashtable.newFrom({"CopyButton": gdjs.WaitCode.GDCopyButtonObjects1});
gdjs.WaitCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CopyButton"), gdjs.WaitCode.GDCopyButtonObjects1);

gdjs.WaitCode.condition0IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WaitCode.mapOfGDgdjs_46WaitCode_46GDCopyButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.WaitCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__Clipboard__WriteText.func(runtimeScene, gdjs.evtTools.p2p.getCurrentId(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.WaitCode.eventsList14 = function(runtimeScene) {

{


gdjs.WaitCode.condition0IsTrue_0.val = false;
gdjs.WaitCode.condition1IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.WaitCode.condition0IsTrue_0.val ) {
{
{gdjs.WaitCode.conditionTrue_1 = gdjs.WaitCode.condition1IsTrue_0;
gdjs.WaitCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11949140);
}
}}
if (gdjs.WaitCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.WaitCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.WaitCode.eventsList15 = function(runtimeScene) {

{


gdjs.WaitCode.condition0IsTrue_0.val = false;
{
gdjs.WaitCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onError();
}if (gdjs.WaitCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ErrorText"), gdjs.WaitCode.GDErrorTextObjects1);
{for(var i = 0, len = gdjs.WaitCode.GDErrorTextObjects1.length ;i < len;++i) {
    gdjs.WaitCode.GDErrorTextObjects1[i].setString(gdjs.evtTools.p2p.getLastError());
}
}}

}


};gdjs.WaitCode.eventsList16 = function(runtimeScene) {

{


gdjs.WaitCode.eventsList1(runtimeScene);
}


{


gdjs.WaitCode.eventsList12(runtimeScene);
}


{


gdjs.WaitCode.eventsList14(runtimeScene);
}


{


gdjs.WaitCode.eventsList15(runtimeScene);
}


};

gdjs.WaitCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WaitCode.GDWelcomeTextObjects1.length = 0;
gdjs.WaitCode.GDWelcomeTextObjects2.length = 0;
gdjs.WaitCode.GDWelcomeTextObjects3.length = 0;
gdjs.WaitCode.GDWelcomeTextObjects4.length = 0;
gdjs.WaitCode.GDidTextObjects1.length = 0;
gdjs.WaitCode.GDidTextObjects2.length = 0;
gdjs.WaitCode.GDidTextObjects3.length = 0;
gdjs.WaitCode.GDidTextObjects4.length = 0;
gdjs.WaitCode.GDCopyButtonObjects1.length = 0;
gdjs.WaitCode.GDCopyButtonObjects2.length = 0;
gdjs.WaitCode.GDCopyButtonObjects3.length = 0;
gdjs.WaitCode.GDCopyButtonObjects4.length = 0;
gdjs.WaitCode.GDCopyTextObjects1.length = 0;
gdjs.WaitCode.GDCopyTextObjects2.length = 0;
gdjs.WaitCode.GDCopyTextObjects3.length = 0;
gdjs.WaitCode.GDCopyTextObjects4.length = 0;
gdjs.WaitCode.GDErrorTextObjects1.length = 0;
gdjs.WaitCode.GDErrorTextObjects2.length = 0;
gdjs.WaitCode.GDErrorTextObjects3.length = 0;
gdjs.WaitCode.GDErrorTextObjects4.length = 0;
gdjs.WaitCode.GDStatusObjects1.length = 0;
gdjs.WaitCode.GDStatusObjects2.length = 0;
gdjs.WaitCode.GDStatusObjects3.length = 0;
gdjs.WaitCode.GDStatusObjects4.length = 0;

gdjs.WaitCode.eventsList16(runtimeScene);
return;

}

gdjs['WaitCode'] = gdjs.WaitCode;
