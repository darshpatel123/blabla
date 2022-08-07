gdjs.BrokerCode = {};
gdjs.BrokerCode.forEachIndex3 = 0;

gdjs.BrokerCode.forEachObjects3 = [];

gdjs.BrokerCode.forEachTemporary3 = null;

gdjs.BrokerCode.forEachTotalCount3 = 0;

gdjs.BrokerCode.GDWelcomeTextObjects1= [];
gdjs.BrokerCode.GDWelcomeTextObjects2= [];
gdjs.BrokerCode.GDWelcomeTextObjects3= [];
gdjs.BrokerCode.GDWelcomeTextObjects4= [];
gdjs.BrokerCode.GDidTextObjects1= [];
gdjs.BrokerCode.GDidTextObjects2= [];
gdjs.BrokerCode.GDidTextObjects3= [];
gdjs.BrokerCode.GDidTextObjects4= [];
gdjs.BrokerCode.GDidEntryObjects1= [];
gdjs.BrokerCode.GDidEntryObjects2= [];
gdjs.BrokerCode.GDidEntryObjects3= [];
gdjs.BrokerCode.GDidEntryObjects4= [];
gdjs.BrokerCode.GDidEntryTextObjects1= [];
gdjs.BrokerCode.GDidEntryTextObjects2= [];
gdjs.BrokerCode.GDidEntryTextObjects3= [];
gdjs.BrokerCode.GDidEntryTextObjects4= [];
gdjs.BrokerCode.GDidEntrySpriteObjects1= [];
gdjs.BrokerCode.GDidEntrySpriteObjects2= [];
gdjs.BrokerCode.GDidEntrySpriteObjects3= [];
gdjs.BrokerCode.GDidEntrySpriteObjects4= [];
gdjs.BrokerCode.GDStartButtonObjects1= [];
gdjs.BrokerCode.GDStartButtonObjects2= [];
gdjs.BrokerCode.GDStartButtonObjects3= [];
gdjs.BrokerCode.GDStartButtonObjects4= [];
gdjs.BrokerCode.GDaddButtonObjects1= [];
gdjs.BrokerCode.GDaddButtonObjects2= [];
gdjs.BrokerCode.GDaddButtonObjects3= [];
gdjs.BrokerCode.GDaddButtonObjects4= [];
gdjs.BrokerCode.GDRemoveButtonObjects1= [];
gdjs.BrokerCode.GDRemoveButtonObjects2= [];
gdjs.BrokerCode.GDRemoveButtonObjects3= [];
gdjs.BrokerCode.GDRemoveButtonObjects4= [];
gdjs.BrokerCode.GDConnectButtonObjects1= [];
gdjs.BrokerCode.GDConnectButtonObjects2= [];
gdjs.BrokerCode.GDConnectButtonObjects3= [];
gdjs.BrokerCode.GDConnectButtonObjects4= [];
gdjs.BrokerCode.GDCopyButtonObjects1= [];
gdjs.BrokerCode.GDCopyButtonObjects2= [];
gdjs.BrokerCode.GDCopyButtonObjects3= [];
gdjs.BrokerCode.GDCopyButtonObjects4= [];
gdjs.BrokerCode.GDcheckboxObjects1= [];
gdjs.BrokerCode.GDcheckboxObjects2= [];
gdjs.BrokerCode.GDcheckboxObjects3= [];
gdjs.BrokerCode.GDcheckboxObjects4= [];
gdjs.BrokerCode.GDPasteButtonObjects1= [];
gdjs.BrokerCode.GDPasteButtonObjects2= [];
gdjs.BrokerCode.GDPasteButtonObjects3= [];
gdjs.BrokerCode.GDPasteButtonObjects4= [];
gdjs.BrokerCode.GDConnectTextObjects1= [];
gdjs.BrokerCode.GDConnectTextObjects2= [];
gdjs.BrokerCode.GDConnectTextObjects3= [];
gdjs.BrokerCode.GDConnectTextObjects4= [];
gdjs.BrokerCode.GDCopyTextObjects1= [];
gdjs.BrokerCode.GDCopyTextObjects2= [];
gdjs.BrokerCode.GDCopyTextObjects3= [];
gdjs.BrokerCode.GDCopyTextObjects4= [];
gdjs.BrokerCode.GDPasteTextObjects1= [];
gdjs.BrokerCode.GDPasteTextObjects2= [];
gdjs.BrokerCode.GDPasteTextObjects3= [];
gdjs.BrokerCode.GDPasteTextObjects4= [];
gdjs.BrokerCode.GDErrorTextObjects1= [];
gdjs.BrokerCode.GDErrorTextObjects2= [];
gdjs.BrokerCode.GDErrorTextObjects3= [];
gdjs.BrokerCode.GDErrorTextObjects4= [];
gdjs.BrokerCode.GDStartObjects1= [];
gdjs.BrokerCode.GDStartObjects2= [];
gdjs.BrokerCode.GDStartObjects3= [];
gdjs.BrokerCode.GDStartObjects4= [];
gdjs.BrokerCode.GDaddObjects1= [];
gdjs.BrokerCode.GDaddObjects2= [];
gdjs.BrokerCode.GDaddObjects3= [];
gdjs.BrokerCode.GDaddObjects4= [];
gdjs.BrokerCode.GDremoveObjects1= [];
gdjs.BrokerCode.GDremoveObjects2= [];
gdjs.BrokerCode.GDremoveObjects3= [];
gdjs.BrokerCode.GDremoveObjects4= [];

gdjs.BrokerCode.conditionTrue_0 = {val:false};
gdjs.BrokerCode.condition0IsTrue_0 = {val:false};
gdjs.BrokerCode.condition1IsTrue_0 = {val:false};
gdjs.BrokerCode.condition2IsTrue_0 = {val:false};
gdjs.BrokerCode.conditionTrue_1 = {val:false};
gdjs.BrokerCode.condition0IsTrue_1 = {val:false};
gdjs.BrokerCode.condition1IsTrue_1 = {val:false};
gdjs.BrokerCode.condition2IsTrue_1 = {val:false};


gdjs.BrokerCode.eventsList0 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("ErrorText"), gdjs.BrokerCode.GDErrorTextObjects1);
{for(var i = 0, len = gdjs.BrokerCode.GDErrorTextObjects1.length ;i < len;++i) {
    gdjs.BrokerCode.GDErrorTextObjects1[i].setString("");
}
}}

}


};gdjs.BrokerCode.eventsList1 = function(runtimeScene) {

{


gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
gdjs.BrokerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.BrokerCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.BrokerCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.BrokerCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.BrokerCode.condition0IsTrue_0.val = false;
gdjs.BrokerCode.condition1IsTrue_0.val = false;
{
gdjs.BrokerCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.isReady();
}if ( gdjs.BrokerCode.condition0IsTrue_0.val ) {
{
{gdjs.BrokerCode.conditionTrue_1 = gdjs.BrokerCode.condition1IsTrue_0;
gdjs.BrokerCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11960396);
}
}}
if (gdjs.BrokerCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("0").getChild("id").setString(gdjs.evtTools.p2p.getCurrentId());
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("0").getChild("username").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("username")));
}}

}


};gdjs.BrokerCode.eventsList3 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("ConnectText"), gdjs.BrokerCode.GDConnectTextObjects3);
gdjs.copyArray(gdjs.BrokerCode.GDidEntryTextObjects2, gdjs.BrokerCode.GDidEntryTextObjects3);


gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BrokerCode.GDConnectTextObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDConnectTextObjects3[i].getVariableNumber(gdjs.BrokerCode.GDConnectTextObjects3[i].getVariables().get("id")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDidEntryTextObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDidEntryTextObjects3[0].getVariables()).get("id"))) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDConnectTextObjects3[k] = gdjs.BrokerCode.GDConnectTextObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDConnectTextObjects3.length = k;}if (gdjs.BrokerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BrokerCode.GDConnectTextObjects3 */
{for(var i = 0, len = gdjs.BrokerCode.GDConnectTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDConnectTextObjects3[i].setString("Connected");
}
}{for(var i = 0, len = gdjs.BrokerCode.GDConnectTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDConnectTextObjects3[i].setColor("50;200;50");
}
}{for(var i = 0, len = gdjs.BrokerCode.GDConnectTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDConnectTextObjects3[i].setX(gdjs.BrokerCode.GDConnectTextObjects3[i].getX() - (4));
}
}{for(var i = 0, len = gdjs.BrokerCode.GDConnectTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDConnectTextObjects3[i].setCharacterSize(18);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ConnectButton"), gdjs.BrokerCode.GDConnectButtonObjects3);
gdjs.copyArray(gdjs.BrokerCode.GDidEntryTextObjects2, gdjs.BrokerCode.GDidEntryTextObjects3);


gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BrokerCode.GDConnectButtonObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDConnectButtonObjects3[i].getVariableNumber(gdjs.BrokerCode.GDConnectButtonObjects3[i].getVariables().get("id")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDidEntryTextObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDidEntryTextObjects3[0].getVariables()).get("id"))) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDConnectButtonObjects3[k] = gdjs.BrokerCode.GDConnectButtonObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDConnectButtonObjects3.length = k;}if (gdjs.BrokerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BrokerCode.GDConnectButtonObjects3 */
{for(var i = 0, len = gdjs.BrokerCode.GDConnectButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDConnectButtonObjects3[i].setVariableBoolean(gdjs.BrokerCode.GDConnectButtonObjects3[i].getVariables().get("Connected"), true);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PasteButton"), gdjs.BrokerCode.GDPasteButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("PasteText"), gdjs.BrokerCode.GDPasteTextObjects3);
gdjs.copyArray(gdjs.BrokerCode.GDidEntryTextObjects2, gdjs.BrokerCode.GDidEntryTextObjects3);


gdjs.BrokerCode.condition0IsTrue_0.val = false;
gdjs.BrokerCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BrokerCode.GDPasteButtonObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDPasteButtonObjects3[i].getVariableNumber(gdjs.BrokerCode.GDPasteButtonObjects3[i].getVariables().get("id")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDidEntryTextObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDidEntryTextObjects3[0].getVariables()).get("id"))) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDPasteButtonObjects3[k] = gdjs.BrokerCode.GDPasteButtonObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDPasteButtonObjects3.length = k;}if ( gdjs.BrokerCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.BrokerCode.GDPasteTextObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDPasteTextObjects3[i].getVariableNumber(gdjs.BrokerCode.GDPasteTextObjects3[i].getVariables().get("id")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDidEntryTextObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDidEntryTextObjects3[0].getVariables()).get("id"))) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDPasteTextObjects3[k] = gdjs.BrokerCode.GDPasteTextObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDPasteTextObjects3.length = k;}}
if (gdjs.BrokerCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BrokerCode.GDPasteButtonObjects3 */
/* Reuse gdjs.BrokerCode.GDPasteTextObjects3 */
{for(var i = 0, len = gdjs.BrokerCode.GDPasteButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDPasteButtonObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.BrokerCode.GDPasteTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDPasteTextObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RemoveButton"), gdjs.BrokerCode.GDRemoveButtonObjects3);
gdjs.copyArray(gdjs.BrokerCode.GDidEntryTextObjects2, gdjs.BrokerCode.GDidEntryTextObjects3);

gdjs.copyArray(runtimeScene.getObjects("remove"), gdjs.BrokerCode.GDremoveObjects3);

gdjs.BrokerCode.condition0IsTrue_0.val = false;
gdjs.BrokerCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BrokerCode.GDRemoveButtonObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDRemoveButtonObjects3[i].getVariableNumber(gdjs.BrokerCode.GDRemoveButtonObjects3[i].getVariables().get("id")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDidEntryTextObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDidEntryTextObjects3[0].getVariables()).get("id"))) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDRemoveButtonObjects3[k] = gdjs.BrokerCode.GDRemoveButtonObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDRemoveButtonObjects3.length = k;}if ( gdjs.BrokerCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.BrokerCode.GDremoveObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDremoveObjects3[i].getVariableNumber(gdjs.BrokerCode.GDremoveObjects3[i].getVariables().get("id")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDidEntryTextObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDidEntryTextObjects3[0].getVariables()).get("id"))) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDremoveObjects3[k] = gdjs.BrokerCode.GDremoveObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDremoveObjects3.length = k;}}
if (gdjs.BrokerCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BrokerCode.GDRemoveButtonObjects3 */
/* Reuse gdjs.BrokerCode.GDremoveObjects3 */
{for(var i = 0, len = gdjs.BrokerCode.GDRemoveButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDRemoveButtonObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.BrokerCode.GDremoveObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDremoveObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


{
{gdjs.evtTools.p2p.sendDataTo(gdjs.evtTools.p2p.getEventSender("ok"), "in", "");
}}

}


};gdjs.BrokerCode.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("idEntryText"), gdjs.BrokerCode.GDidEntryTextObjects2);

gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BrokerCode.GDidEntryTextObjects2.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDidEntryTextObjects2[i].getString() == gdjs.evtTools.p2p.getEventSender("ok") ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDidEntryTextObjects2[k] = gdjs.BrokerCode.GDidEntryTextObjects2[i];
        ++k;
    }
}
gdjs.BrokerCode.GDidEntryTextObjects2.length = k;}if (gdjs.BrokerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BrokerCode.GDidEntryTextObjects2 */
{for(var i = 0, len = gdjs.BrokerCode.GDidEntryTextObjects2.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryTextObjects2[i].returnVariable(gdjs.BrokerCode.GDidEntryTextObjects2[i].getVariables().get("username")).setString(gdjs.evtTools.p2p.getEventData("ok"));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDidEntryTextObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDidEntryTextObjects2[0].getVariables()).get("id")))).getChild("username").setString((gdjs.RuntimeObject.getVariableString(((gdjs.BrokerCode.GDidEntryTextObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDidEntryTextObjects2[0].getVariables()).get("username"))));
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDidEntryTextObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDidEntryTextObjects2[0].getVariables()).get("id")))).getChild("id").setString((( gdjs.BrokerCode.GDidEntryTextObjects2.length === 0 ) ? "" :gdjs.BrokerCode.GDidEntryTextObjects2[0].getString()));
}
{ //Subevents
gdjs.BrokerCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDPasteButtonObjects3ObjectsGDgdjs_46BrokerCode_46GDPasteTextObjects3ObjectsGDgdjs_46BrokerCode_46GDidEntryObjects3ObjectsGDgdjs_46BrokerCode_46GDidEntryTextObjects3ObjectsGDgdjs_46BrokerCode_46GDidEntrySpriteObjects3ObjectsGDgdjs_46BrokerCode_46GDRemoveButtonObjects3ObjectsGDgdjs_46BrokerCode_46GDremoveObjects3ObjectsGDgdjs_46BrokerCode_46GDCopyButtonObjects3ObjectsGDgdjs_46BrokerCode_46GDCopyTextObjects3ObjectsGDgdjs_46BrokerCode_46GDConnectTextObjects3ObjectsGDgdjs_46BrokerCode_46GDConnectButtonObjects3Objects = Hashtable.newFrom({"PasteButton": gdjs.BrokerCode.GDPasteButtonObjects3, "PasteText": gdjs.BrokerCode.GDPasteTextObjects3, "idEntry": gdjs.BrokerCode.GDidEntryObjects3, "idEntryText": gdjs.BrokerCode.GDidEntryTextObjects3, "idEntrySprite": gdjs.BrokerCode.GDidEntrySpriteObjects3, "RemoveButton": gdjs.BrokerCode.GDRemoveButtonObjects3, "remove": gdjs.BrokerCode.GDremoveObjects3, "CopyButton": gdjs.BrokerCode.GDCopyButtonObjects3, "CopyText": gdjs.BrokerCode.GDCopyTextObjects3, "ConnectText": gdjs.BrokerCode.GDConnectTextObjects3, "ConnectButton": gdjs.BrokerCode.GDConnectButtonObjects3});
gdjs.BrokerCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ConnectButton"), gdjs.BrokerCode.GDConnectButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("ConnectText"), gdjs.BrokerCode.GDConnectTextObjects3);
gdjs.copyArray(runtimeScene.getObjects("CopyButton"), gdjs.BrokerCode.GDCopyButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("CopyText"), gdjs.BrokerCode.GDCopyTextObjects3);
gdjs.copyArray(runtimeScene.getObjects("PasteButton"), gdjs.BrokerCode.GDPasteButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("PasteText"), gdjs.BrokerCode.GDPasteTextObjects3);
gdjs.copyArray(runtimeScene.getObjects("RemoveButton"), gdjs.BrokerCode.GDRemoveButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("idEntry"), gdjs.BrokerCode.GDidEntryObjects3);
gdjs.copyArray(runtimeScene.getObjects("idEntrySprite"), gdjs.BrokerCode.GDidEntrySpriteObjects3);
gdjs.copyArray(gdjs.BrokerCode.GDidEntryTextObjects2, gdjs.BrokerCode.GDidEntryTextObjects3);

gdjs.copyArray(runtimeScene.getObjects("remove"), gdjs.BrokerCode.GDremoveObjects3);

gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BrokerCode.GDPasteButtonObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDPasteButtonObjects3[i].getVariableNumber(gdjs.BrokerCode.GDPasteButtonObjects3[i].getVariables().get("id")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDPasteButtonObjects3[k] = gdjs.BrokerCode.GDPasteButtonObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDPasteButtonObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDPasteTextObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDPasteTextObjects3[i].getVariableNumber(gdjs.BrokerCode.GDPasteTextObjects3[i].getVariables().get("id")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDPasteTextObjects3[k] = gdjs.BrokerCode.GDPasteTextObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDPasteTextObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDidEntryObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDidEntryObjects3[i].getVariableNumber(gdjs.BrokerCode.GDidEntryObjects3[i].getVariables().get("id")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDidEntryObjects3[k] = gdjs.BrokerCode.GDidEntryObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDidEntryObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDidEntryTextObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDidEntryTextObjects3[i].getVariableNumber(gdjs.BrokerCode.GDidEntryTextObjects3[i].getVariables().get("id")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDidEntryTextObjects3[k] = gdjs.BrokerCode.GDidEntryTextObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDidEntryTextObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDidEntrySpriteObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDidEntrySpriteObjects3[i].getVariableNumber(gdjs.BrokerCode.GDidEntrySpriteObjects3[i].getVariables().get("id")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDidEntrySpriteObjects3[k] = gdjs.BrokerCode.GDidEntrySpriteObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDidEntrySpriteObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDRemoveButtonObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDRemoveButtonObjects3[i].getVariableNumber(gdjs.BrokerCode.GDRemoveButtonObjects3[i].getVariables().get("id")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDRemoveButtonObjects3[k] = gdjs.BrokerCode.GDRemoveButtonObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDRemoveButtonObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDremoveObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDremoveObjects3[i].getVariableNumber(gdjs.BrokerCode.GDremoveObjects3[i].getVariables().get("id")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDremoveObjects3[k] = gdjs.BrokerCode.GDremoveObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDremoveObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDCopyButtonObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDCopyButtonObjects3[i].getVariableNumber(gdjs.BrokerCode.GDCopyButtonObjects3[i].getVariables().get("id")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDCopyButtonObjects3[k] = gdjs.BrokerCode.GDCopyButtonObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDCopyButtonObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDCopyTextObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDCopyTextObjects3[i].getVariableNumber(gdjs.BrokerCode.GDCopyTextObjects3[i].getVariables().get("id")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDCopyTextObjects3[k] = gdjs.BrokerCode.GDCopyTextObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDCopyTextObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDConnectTextObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDConnectTextObjects3[i].getVariableNumber(gdjs.BrokerCode.GDConnectTextObjects3[i].getVariables().get("id")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDConnectTextObjects3[k] = gdjs.BrokerCode.GDConnectTextObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDConnectTextObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDConnectButtonObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDConnectButtonObjects3[i].getVariableNumber(gdjs.BrokerCode.GDConnectButtonObjects3[i].getVariables().get("id")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDConnectButtonObjects3[k] = gdjs.BrokerCode.GDConnectButtonObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDConnectButtonObjects3.length = k;}if (gdjs.BrokerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BrokerCode.GDConnectButtonObjects3 */
/* Reuse gdjs.BrokerCode.GDConnectTextObjects3 */
/* Reuse gdjs.BrokerCode.GDCopyButtonObjects3 */
/* Reuse gdjs.BrokerCode.GDCopyTextObjects3 */
/* Reuse gdjs.BrokerCode.GDPasteButtonObjects3 */
/* Reuse gdjs.BrokerCode.GDPasteTextObjects3 */
/* Reuse gdjs.BrokerCode.GDRemoveButtonObjects3 */
/* Reuse gdjs.BrokerCode.GDidEntryObjects3 */
/* Reuse gdjs.BrokerCode.GDidEntrySpriteObjects3 */
/* Reuse gdjs.BrokerCode.GDidEntryTextObjects3 */
/* Reuse gdjs.BrokerCode.GDremoveObjects3 */
{for(var i = 0, len = gdjs.BrokerCode.GDPasteButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDPasteButtonObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BrokerCode.GDPasteTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDPasteTextObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BrokerCode.GDidEntryObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BrokerCode.GDidEntryTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryTextObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BrokerCode.GDidEntrySpriteObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntrySpriteObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BrokerCode.GDRemoveButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDRemoveButtonObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BrokerCode.GDremoveObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDremoveObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BrokerCode.GDCopyButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDCopyButtonObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BrokerCode.GDCopyTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDCopyTextObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BrokerCode.GDConnectTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDConnectTextObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BrokerCode.GDConnectButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDConnectButtonObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.BrokerCode.GDStartObjects3);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.BrokerCode.GDStartButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("add"), gdjs.BrokerCode.GDaddObjects3);
gdjs.copyArray(runtimeScene.getObjects("addButton"), gdjs.BrokerCode.GDaddButtonObjects3);
{for(var i = 0, len = gdjs.BrokerCode.GDaddObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDaddObjects3[i].setY(gdjs.BrokerCode.GDaddObjects3[i].getY() - (80));
}
}{for(var i = 0, len = gdjs.BrokerCode.GDaddButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDaddButtonObjects3[i].setY(gdjs.BrokerCode.GDaddButtonObjects3[i].getY() - (80));
}
}{for(var i = 0, len = gdjs.BrokerCode.GDStartObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDStartObjects3[i].setY(gdjs.BrokerCode.GDStartObjects3[i].getY() - (80));
}
}{for(var i = 0, len = gdjs.BrokerCode.GDStartButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDStartButtonObjects3[i].setY(gdjs.BrokerCode.GDStartButtonObjects3[i].getY() - (80));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ConnectButton"), gdjs.BrokerCode.GDConnectButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("ConnectText"), gdjs.BrokerCode.GDConnectTextObjects3);
gdjs.copyArray(runtimeScene.getObjects("CopyButton"), gdjs.BrokerCode.GDCopyButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("CopyText"), gdjs.BrokerCode.GDCopyTextObjects3);
gdjs.copyArray(runtimeScene.getObjects("PasteButton"), gdjs.BrokerCode.GDPasteButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("PasteText"), gdjs.BrokerCode.GDPasteTextObjects3);
gdjs.copyArray(runtimeScene.getObjects("RemoveButton"), gdjs.BrokerCode.GDRemoveButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("idEntry"), gdjs.BrokerCode.GDidEntryObjects3);
gdjs.copyArray(runtimeScene.getObjects("idEntrySprite"), gdjs.BrokerCode.GDidEntrySpriteObjects3);
gdjs.copyArray(gdjs.BrokerCode.GDidEntryTextObjects2, gdjs.BrokerCode.GDidEntryTextObjects3);

gdjs.copyArray(runtimeScene.getObjects("remove"), gdjs.BrokerCode.GDremoveObjects3);

gdjs.BrokerCode.condition0IsTrue_0.val = false;
gdjs.BrokerCode.condition1IsTrue_0.val = false;
{
gdjs.BrokerCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDPasteButtonObjects3ObjectsGDgdjs_46BrokerCode_46GDPasteTextObjects3ObjectsGDgdjs_46BrokerCode_46GDidEntryObjects3ObjectsGDgdjs_46BrokerCode_46GDidEntryTextObjects3ObjectsGDgdjs_46BrokerCode_46GDidEntrySpriteObjects3ObjectsGDgdjs_46BrokerCode_46GDRemoveButtonObjects3ObjectsGDgdjs_46BrokerCode_46GDremoveObjects3ObjectsGDgdjs_46BrokerCode_46GDCopyButtonObjects3ObjectsGDgdjs_46BrokerCode_46GDCopyTextObjects3ObjectsGDgdjs_46BrokerCode_46GDConnectTextObjects3ObjectsGDgdjs_46BrokerCode_46GDConnectButtonObjects3Objects);
}if ( gdjs.BrokerCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.BrokerCode.GDPasteButtonObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDPasteButtonObjects3[i].getVariableNumber(gdjs.BrokerCode.GDPasteButtonObjects3[i].getVariables().get("id")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDPasteButtonObjects3[k] = gdjs.BrokerCode.GDPasteButtonObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDPasteButtonObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDPasteTextObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDPasteTextObjects3[i].getVariableNumber(gdjs.BrokerCode.GDPasteTextObjects3[i].getVariables().get("id")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDPasteTextObjects3[k] = gdjs.BrokerCode.GDPasteTextObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDPasteTextObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDidEntryObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDidEntryObjects3[i].getVariableNumber(gdjs.BrokerCode.GDidEntryObjects3[i].getVariables().get("id")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDidEntryObjects3[k] = gdjs.BrokerCode.GDidEntryObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDidEntryObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDidEntryTextObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDidEntryTextObjects3[i].getVariableNumber(gdjs.BrokerCode.GDidEntryTextObjects3[i].getVariables().get("id")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDidEntryTextObjects3[k] = gdjs.BrokerCode.GDidEntryTextObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDidEntryTextObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDidEntrySpriteObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDidEntrySpriteObjects3[i].getVariableNumber(gdjs.BrokerCode.GDidEntrySpriteObjects3[i].getVariables().get("id")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDidEntrySpriteObjects3[k] = gdjs.BrokerCode.GDidEntrySpriteObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDidEntrySpriteObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDRemoveButtonObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDRemoveButtonObjects3[i].getVariableNumber(gdjs.BrokerCode.GDRemoveButtonObjects3[i].getVariables().get("id")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDRemoveButtonObjects3[k] = gdjs.BrokerCode.GDRemoveButtonObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDRemoveButtonObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDremoveObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDremoveObjects3[i].getVariableNumber(gdjs.BrokerCode.GDremoveObjects3[i].getVariables().get("id")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDremoveObjects3[k] = gdjs.BrokerCode.GDremoveObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDremoveObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDCopyButtonObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDCopyButtonObjects3[i].getVariableNumber(gdjs.BrokerCode.GDCopyButtonObjects3[i].getVariables().get("id")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDCopyButtonObjects3[k] = gdjs.BrokerCode.GDCopyButtonObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDCopyButtonObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDCopyTextObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDCopyTextObjects3[i].getVariableNumber(gdjs.BrokerCode.GDCopyTextObjects3[i].getVariables().get("id")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDCopyTextObjects3[k] = gdjs.BrokerCode.GDCopyTextObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDCopyTextObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDConnectTextObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDConnectTextObjects3[i].getVariableNumber(gdjs.BrokerCode.GDConnectTextObjects3[i].getVariables().get("id")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDConnectTextObjects3[k] = gdjs.BrokerCode.GDConnectTextObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDConnectTextObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDConnectButtonObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDConnectButtonObjects3[i].getVariableNumber(gdjs.BrokerCode.GDConnectButtonObjects3[i].getVariables().get("id")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDConnectButtonObjects3[k] = gdjs.BrokerCode.GDConnectButtonObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDConnectButtonObjects3.length = k;}}
if (gdjs.BrokerCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BrokerCode.GDConnectButtonObjects3 */
/* Reuse gdjs.BrokerCode.GDConnectTextObjects3 */
/* Reuse gdjs.BrokerCode.GDCopyButtonObjects3 */
/* Reuse gdjs.BrokerCode.GDCopyTextObjects3 */
/* Reuse gdjs.BrokerCode.GDPasteButtonObjects3 */
/* Reuse gdjs.BrokerCode.GDPasteTextObjects3 */
/* Reuse gdjs.BrokerCode.GDRemoveButtonObjects3 */
/* Reuse gdjs.BrokerCode.GDidEntryObjects3 */
/* Reuse gdjs.BrokerCode.GDidEntrySpriteObjects3 */
/* Reuse gdjs.BrokerCode.GDidEntryTextObjects3 */
/* Reuse gdjs.BrokerCode.GDremoveObjects3 */
{for(var i = 0, len = gdjs.BrokerCode.GDPasteButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDPasteButtonObjects3[i].setY(gdjs.BrokerCode.GDPasteButtonObjects3[i].getY() - (80));
}
for(var i = 0, len = gdjs.BrokerCode.GDPasteTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDPasteTextObjects3[i].setY(gdjs.BrokerCode.GDPasteTextObjects3[i].getY() - (80));
}
for(var i = 0, len = gdjs.BrokerCode.GDidEntryObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryObjects3[i].setY(gdjs.BrokerCode.GDidEntryObjects3[i].getY() - (80));
}
for(var i = 0, len = gdjs.BrokerCode.GDidEntryTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryTextObjects3[i].setY(gdjs.BrokerCode.GDidEntryTextObjects3[i].getY() - (80));
}
for(var i = 0, len = gdjs.BrokerCode.GDidEntrySpriteObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntrySpriteObjects3[i].setY(gdjs.BrokerCode.GDidEntrySpriteObjects3[i].getY() - (80));
}
for(var i = 0, len = gdjs.BrokerCode.GDRemoveButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDRemoveButtonObjects3[i].setY(gdjs.BrokerCode.GDRemoveButtonObjects3[i].getY() - (80));
}
for(var i = 0, len = gdjs.BrokerCode.GDremoveObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDremoveObjects3[i].setY(gdjs.BrokerCode.GDremoveObjects3[i].getY() - (80));
}
for(var i = 0, len = gdjs.BrokerCode.GDCopyButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDCopyButtonObjects3[i].setY(gdjs.BrokerCode.GDCopyButtonObjects3[i].getY() - (80));
}
for(var i = 0, len = gdjs.BrokerCode.GDCopyTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDCopyTextObjects3[i].setY(gdjs.BrokerCode.GDCopyTextObjects3[i].getY() - (80));
}
for(var i = 0, len = gdjs.BrokerCode.GDConnectTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDConnectTextObjects3[i].setY(gdjs.BrokerCode.GDConnectTextObjects3[i].getY() - (80));
}
for(var i = 0, len = gdjs.BrokerCode.GDConnectButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDConnectButtonObjects3[i].setY(gdjs.BrokerCode.GDConnectButtonObjects3[i].getY() - (80));
}
}{for(var i = 0, len = gdjs.BrokerCode.GDPasteButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDPasteButtonObjects3[i].returnVariable(gdjs.BrokerCode.GDPasteButtonObjects3[i].getVariables().get("id")).sub(1);
}
for(var i = 0, len = gdjs.BrokerCode.GDPasteTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDPasteTextObjects3[i].returnVariable(gdjs.BrokerCode.GDPasteTextObjects3[i].getVariables().get("id")).sub(1);
}
for(var i = 0, len = gdjs.BrokerCode.GDidEntryObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryObjects3[i].returnVariable(gdjs.BrokerCode.GDidEntryObjects3[i].getVariables().get("id")).sub(1);
}
for(var i = 0, len = gdjs.BrokerCode.GDidEntryTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryTextObjects3[i].returnVariable(gdjs.BrokerCode.GDidEntryTextObjects3[i].getVariables().get("id")).sub(1);
}
for(var i = 0, len = gdjs.BrokerCode.GDidEntrySpriteObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntrySpriteObjects3[i].returnVariable(gdjs.BrokerCode.GDidEntrySpriteObjects3[i].getVariables().get("id")).sub(1);
}
for(var i = 0, len = gdjs.BrokerCode.GDRemoveButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDRemoveButtonObjects3[i].returnVariable(gdjs.BrokerCode.GDRemoveButtonObjects3[i].getVariables().get("id")).sub(1);
}
for(var i = 0, len = gdjs.BrokerCode.GDremoveObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDremoveObjects3[i].returnVariable(gdjs.BrokerCode.GDremoveObjects3[i].getVariables().get("id")).sub(1);
}
for(var i = 0, len = gdjs.BrokerCode.GDCopyButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDCopyButtonObjects3[i].returnVariable(gdjs.BrokerCode.GDCopyButtonObjects3[i].getVariables().get("id")).sub(1);
}
for(var i = 0, len = gdjs.BrokerCode.GDCopyTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDCopyTextObjects3[i].returnVariable(gdjs.BrokerCode.GDCopyTextObjects3[i].getVariables().get("id")).sub(1);
}
for(var i = 0, len = gdjs.BrokerCode.GDConnectTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDConnectTextObjects3[i].returnVariable(gdjs.BrokerCode.GDConnectTextObjects3[i].getVariables().get("id")).sub(1);
}
for(var i = 0, len = gdjs.BrokerCode.GDConnectButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDConnectButtonObjects3[i].returnVariable(gdjs.BrokerCode.GDConnectButtonObjects3[i].getVariables().get("id")).sub(1);
}
}}

}


{


{
{runtimeScene.getVariables().get("PlayerCount").sub(1);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("ErrorText"), gdjs.BrokerCode.GDErrorTextObjects2);
{for(var i = 0, len = gdjs.BrokerCode.GDErrorTextObjects2.length ;i < len;++i) {
    gdjs.BrokerCode.GDErrorTextObjects2[i].setString("A Player disconnected and was removed" + gdjs.evtTools.string.newLine() + "Try to add them again, or start without");
}
}}

}


};gdjs.BrokerCode.eventsList6 = function(runtimeScene) {

};gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDcheckboxObjects1Objects = Hashtable.newFrom({"checkbox": gdjs.BrokerCode.GDcheckboxObjects1});
gdjs.BrokerCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("checkbox"), gdjs.BrokerCode.GDcheckboxObjects1);

gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
gdjs.BrokerCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDcheckboxObjects1Objects);
}if (gdjs.BrokerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BrokerCode.GDcheckboxObjects1 */
{for(var i = 0, len = gdjs.BrokerCode.GDcheckboxObjects1.length ;i < len;++i) {
    gdjs.BrokerCode.GDcheckboxObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.BrokerCode.eventsList8 = function(runtimeScene) {

{



}


{


{
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("0").getChild("id").setString(gdjs.evtTools.p2p.getCurrentId());
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("0").getChild("username").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("username")));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("idEntryText"), gdjs.BrokerCode.GDidEntryTextObjects2);

for(gdjs.BrokerCode.forEachIndex3 = 0;gdjs.BrokerCode.forEachIndex3 < gdjs.BrokerCode.GDidEntryTextObjects2.length;++gdjs.BrokerCode.forEachIndex3) {
gdjs.BrokerCode.GDidEntryTextObjects3.length = 0;


gdjs.BrokerCode.forEachTemporary3 = gdjs.BrokerCode.GDidEntryTextObjects2[gdjs.BrokerCode.forEachIndex3];
gdjs.BrokerCode.GDidEntryTextObjects3.push(gdjs.BrokerCode.forEachTemporary3);
if (true) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDidEntryTextObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDidEntryTextObjects3[0].getVariables()).get("id")))).getChild("id").setString((( gdjs.BrokerCode.GDidEntryTextObjects3.length === 0 ) ? "" :gdjs.BrokerCode.GDidEntryTextObjects3[0].getString()));
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDidEntryTextObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDidEntryTextObjects3[0].getVariables()).get("id")))).getChild("username").setString((gdjs.RuntimeObject.getVariableString(((gdjs.BrokerCode.GDidEntryTextObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDidEntryTextObjects3[0].getVariables()).get("username"))));
}}
}

}


{



}


{


gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
gdjs.BrokerCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Step")) > 0;
}if (gdjs.BrokerCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.BrokerCode.GDStartObjects1);
{gdjs.evtTools.p2p.sendDataToAll("restart", "");
}{for(var i = 0, len = gdjs.BrokerCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.BrokerCode.GDStartObjects1[i].setString("Start Game");
}
}{for(var i = 0, len = gdjs.BrokerCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.BrokerCode.GDStartObjects1[i].setColor("0;0;0");
}
}{runtimeScene.getVariables().get("Step").setNumber(0);
}
{ //Subevents
gdjs.BrokerCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.BrokerCode.eventsList9 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("idEntryText"), gdjs.BrokerCode.GDidEntryTextObjects2);

gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BrokerCode.GDidEntryTextObjects2.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDidEntryTextObjects2[i].getString() == gdjs.evtTools.p2p.getDisconnectedPeer() ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDidEntryTextObjects2[k] = gdjs.BrokerCode.GDidEntryTextObjects2[i];
        ++k;
    }
}
gdjs.BrokerCode.GDidEntryTextObjects2.length = k;}if (gdjs.BrokerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BrokerCode.GDidEntryTextObjects2 */
{runtimeScene.getVariables().get("activeID").setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDidEntryTextObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDidEntryTextObjects2[0].getVariables()).get("id"))));
}
{ //Subevents
gdjs.BrokerCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{


{
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(0));
}
{ //Subevents
gdjs.BrokerCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.BrokerCode.eventsList10 = function(runtimeScene) {

{



}


{


gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
gdjs.BrokerCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("ok", true);
}if (gdjs.BrokerCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.BrokerCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
gdjs.BrokerCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onDisconnect();
}if (gdjs.BrokerCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.BrokerCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.BrokerCode.eventsList11 = function(runtimeScene) {

{

/* Reuse gdjs.BrokerCode.GDidEntryObjects1 */
gdjs.copyArray(runtimeScene.getObjects("idEntryText"), gdjs.BrokerCode.GDidEntryTextObjects1);

gdjs.BrokerCode.condition0IsTrue_0.val = false;
gdjs.BrokerCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BrokerCode.GDidEntryObjects1.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDidEntryObjects1[i].getVariableNumber(gdjs.BrokerCode.GDidEntryObjects1[i].getVariables().get("id")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDidEntryObjects1[k] = gdjs.BrokerCode.GDidEntryObjects1[i];
        ++k;
    }
}
gdjs.BrokerCode.GDidEntryObjects1.length = k;}if ( gdjs.BrokerCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.BrokerCode.GDidEntryTextObjects1.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDidEntryTextObjects1[i].getVariableNumber(gdjs.BrokerCode.GDidEntryTextObjects1[i].getVariables().get("id")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDidEntryTextObjects1[k] = gdjs.BrokerCode.GDidEntryTextObjects1[i];
        ++k;
    }
}
gdjs.BrokerCode.GDidEntryTextObjects1.length = k;}}
if (gdjs.BrokerCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BrokerCode.GDidEntryObjects1 */
/* Reuse gdjs.BrokerCode.GDidEntryTextObjects1 */
{for(var i = 0, len = gdjs.BrokerCode.GDidEntryTextObjects1.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryTextObjects1[i].setString((( gdjs.BrokerCode.GDidEntryObjects1.length === 0 ) ? "" :gdjs.BrokerCode.GDidEntryObjects1[0].getString()));
}
}}

}


};gdjs.BrokerCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("idEntry"), gdjs.BrokerCode.GDidEntryObjects1);

gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BrokerCode.GDidEntryObjects1.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDidEntryObjects1[i].isActivated() ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDidEntryObjects1[k] = gdjs.BrokerCode.GDidEntryObjects1[i];
        ++k;
    }
}
gdjs.BrokerCode.GDidEntryObjects1.length = k;}if (gdjs.BrokerCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.BrokerCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDidEntrySpriteObjects2Objects = Hashtable.newFrom({"idEntrySprite": gdjs.BrokerCode.GDidEntrySpriteObjects2});
gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDidEntrySpriteObjects3Objects = Hashtable.newFrom({"idEntrySprite": gdjs.BrokerCode.GDidEntrySpriteObjects3});
gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDidEntryObjects3Objects = Hashtable.newFrom({"idEntry": gdjs.BrokerCode.GDidEntryObjects3});
gdjs.BrokerCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.BrokerCode.GDidEntrySpriteObjects2, gdjs.BrokerCode.GDidEntrySpriteObjects3);


gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
gdjs.BrokerCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDidEntrySpriteObjects3Objects);
}if (gdjs.BrokerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BrokerCode.GDidEntrySpriteObjects3 */
{for(var i = 0, len = gdjs.BrokerCode.GDidEntrySpriteObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntrySpriteObjects3[i].setAnimation(0);
}
}}

}


{


{
gdjs.copyArray(gdjs.BrokerCode.GDidEntrySpriteObjects2, gdjs.BrokerCode.GDidEntrySpriteObjects3);

{for(var i = 0, len = gdjs.BrokerCode.GDidEntrySpriteObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntrySpriteObjects3[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("idEntry"), gdjs.BrokerCode.GDidEntryObjects3);

gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
gdjs.BrokerCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDidEntryObjects3Objects);
}if (gdjs.BrokerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BrokerCode.GDidEntryObjects3 */
{for(var i = 0, len = gdjs.BrokerCode.GDidEntryObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryObjects3[i].activate(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("idEntry"), gdjs.BrokerCode.GDidEntryObjects2);

gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BrokerCode.GDidEntryObjects2.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDidEntryObjects2[i].getVariableNumber(gdjs.BrokerCode.GDidEntryObjects2[i].getVariables().get("id")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDidEntryObjects2[k] = gdjs.BrokerCode.GDidEntryObjects2[i];
        ++k;
    }
}
gdjs.BrokerCode.GDidEntryObjects2.length = k;}if (gdjs.BrokerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BrokerCode.GDidEntryObjects2 */
{for(var i = 0, len = gdjs.BrokerCode.GDidEntryObjects2.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryObjects2[i].activate(true);
}
}}

}


};gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDPasteButtonObjects2Objects = Hashtable.newFrom({"PasteButton": gdjs.BrokerCode.GDPasteButtonObjects2});
gdjs.BrokerCode.eventsList14 = function(runtimeScene) {

{

/* Reuse gdjs.BrokerCode.GDPasteButtonObjects2 */
/* Reuse gdjs.BrokerCode.GDidEntryObjects2 */
gdjs.copyArray(runtimeScene.getObjects("idEntryText"), gdjs.BrokerCode.GDidEntryTextObjects2);

gdjs.BrokerCode.condition0IsTrue_0.val = false;
gdjs.BrokerCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BrokerCode.GDidEntryObjects2.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDidEntryObjects2[i].getVariableNumber(gdjs.BrokerCode.GDidEntryObjects2[i].getVariables().get("id")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDPasteButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDPasteButtonObjects2[0].getVariables()).get("id"))) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDidEntryObjects2[k] = gdjs.BrokerCode.GDidEntryObjects2[i];
        ++k;
    }
}
gdjs.BrokerCode.GDidEntryObjects2.length = k;}if ( gdjs.BrokerCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.BrokerCode.GDidEntryTextObjects2.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDidEntryTextObjects2[i].getVariableNumber(gdjs.BrokerCode.GDidEntryTextObjects2[i].getVariables().get("id")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDPasteButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDPasteButtonObjects2[0].getVariables()).get("id"))) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDidEntryTextObjects2[k] = gdjs.BrokerCode.GDidEntryTextObjects2[i];
        ++k;
    }
}
gdjs.BrokerCode.GDidEntryTextObjects2.length = k;}}
if (gdjs.BrokerCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BrokerCode.GDidEntryObjects2 */
/* Reuse gdjs.BrokerCode.GDidEntryTextObjects2 */
{for(var i = 0, len = gdjs.BrokerCode.GDidEntryObjects2.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryObjects2[i].setString(gdjs.BrokerCode.GDidEntryObjects2[i].getString() + (gdjs.evtsExt__Clipboard__ReadText.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.BrokerCode.GDidEntryTextObjects2.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryTextObjects2[i].setString((( gdjs.BrokerCode.GDidEntryObjects2.length === 0 ) ? "" :gdjs.BrokerCode.GDidEntryObjects2[0].getString()));
}
}}

}


};gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDaddButtonObjects2Objects = Hashtable.newFrom({"addButton": gdjs.BrokerCode.GDaddButtonObjects2});
gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDidEntrySpriteObjects3Objects = Hashtable.newFrom({"idEntrySprite": gdjs.BrokerCode.GDidEntrySpriteObjects3});
gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDidEntryTextObjects3Objects = Hashtable.newFrom({"idEntryText": gdjs.BrokerCode.GDidEntryTextObjects3});
gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDidEntryObjects3Objects = Hashtable.newFrom({"idEntry": gdjs.BrokerCode.GDidEntryObjects3});
gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDPasteButtonObjects3Objects = Hashtable.newFrom({"PasteButton": gdjs.BrokerCode.GDPasteButtonObjects3});
gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDPasteTextObjects3Objects = Hashtable.newFrom({"PasteText": gdjs.BrokerCode.GDPasteTextObjects3});
gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDConnectButtonObjects3Objects = Hashtable.newFrom({"ConnectButton": gdjs.BrokerCode.GDConnectButtonObjects3});
gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDConnectTextObjects3Objects = Hashtable.newFrom({"ConnectText": gdjs.BrokerCode.GDConnectTextObjects3});
gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDRemoveButtonObjects3Objects = Hashtable.newFrom({"RemoveButton": gdjs.BrokerCode.GDRemoveButtonObjects3});
gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDremoveObjects2Objects = Hashtable.newFrom({"remove": gdjs.BrokerCode.GDremoveObjects2});
gdjs.BrokerCode.eventsList15 = function(runtimeScene) {

{


{
{runtimeScene.getVariables().get("PlayerCount").add(1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.BrokerCode.GDStartObjects3);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.BrokerCode.GDStartButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("add"), gdjs.BrokerCode.GDaddObjects3);
gdjs.copyArray(gdjs.BrokerCode.GDaddButtonObjects2, gdjs.BrokerCode.GDaddButtonObjects3);

{for(var i = 0, len = gdjs.BrokerCode.GDaddObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDaddObjects3[i].setY(gdjs.BrokerCode.GDaddObjects3[i].getY() + (80));
}
}{for(var i = 0, len = gdjs.BrokerCode.GDaddButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDaddButtonObjects3[i].setY(gdjs.BrokerCode.GDaddButtonObjects3[i].getY() + (80));
}
}{for(var i = 0, len = gdjs.BrokerCode.GDStartObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDStartObjects3[i].setY(gdjs.BrokerCode.GDStartObjects3[i].getY() + (80));
}
}{for(var i = 0, len = gdjs.BrokerCode.GDStartButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDStartButtonObjects3[i].setY(gdjs.BrokerCode.GDStartButtonObjects3[i].getY() + (80));
}
}}

}


{


{
gdjs.BrokerCode.GDidEntrySpriteObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDidEntrySpriteObjects3Objects, 108, 120 + 80 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")), "");
}{for(var i = 0, len = gdjs.BrokerCode.GDidEntrySpriteObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntrySpriteObjects3[i].returnVariable(gdjs.BrokerCode.GDidEntrySpriteObjects3[i].getVariables().get("id")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")));
}
}{for(var i = 0, len = gdjs.BrokerCode.GDidEntrySpriteObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntrySpriteObjects3[i].setZOrder(0);
}
}}

}


{


{
gdjs.BrokerCode.GDidEntryTextObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDidEntryTextObjects3Objects, 124, 138 + 80 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")), "");
}{for(var i = 0, len = gdjs.BrokerCode.GDidEntryTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryTextObjects3[i].returnVariable(gdjs.BrokerCode.GDidEntryTextObjects3[i].getVariables().get("id")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")));
}
}{for(var i = 0, len = gdjs.BrokerCode.GDidEntryTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryTextObjects3[i].setZOrder(1);
}
}}

}


{


{
gdjs.BrokerCode.GDidEntryObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDidEntryObjects3Objects, 530, 133 + 80 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")), "");
}{for(var i = 0, len = gdjs.BrokerCode.GDidEntryObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryObjects3[i].returnVariable(gdjs.BrokerCode.GDidEntryObjects3[i].getVariables().get("id")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")));
}
}{for(var i = 0, len = gdjs.BrokerCode.GDidEntryObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryObjects3[i].setZOrder(1);
}
}}

}


{


{
gdjs.BrokerCode.GDPasteButtonObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDPasteButtonObjects3Objects, 10, 120 + 80 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")), "");
}{for(var i = 0, len = gdjs.BrokerCode.GDPasteButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDPasteButtonObjects3[i].returnVariable(gdjs.BrokerCode.GDPasteButtonObjects3[i].getVariables().get("id")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")));
}
}{for(var i = 0, len = gdjs.BrokerCode.GDPasteButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDPasteButtonObjects3[i].setZOrder(0);
}
}}

}


{


{
gdjs.BrokerCode.GDPasteTextObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDPasteTextObjects3Objects, 26, 140 + 80 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")), "");
}{for(var i = 0, len = gdjs.BrokerCode.GDPasteTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDPasteTextObjects3[i].returnVariable(gdjs.BrokerCode.GDPasteTextObjects3[i].getVariables().get("id")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")));
}
}{for(var i = 0, len = gdjs.BrokerCode.GDPasteTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDPasteTextObjects3[i].setZOrder(1);
}
}}

}


{


{
gdjs.BrokerCode.GDConnectButtonObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDConnectButtonObjects3Objects, 598, 120 + 80 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")), "");
}{for(var i = 0, len = gdjs.BrokerCode.GDConnectButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDConnectButtonObjects3[i].returnVariable(gdjs.BrokerCode.GDConnectButtonObjects3[i].getVariables().get("id")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")));
}
}{for(var i = 0, len = gdjs.BrokerCode.GDConnectButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDConnectButtonObjects3[i].setZOrder(0);
}
}}

}


{


{
gdjs.BrokerCode.GDConnectTextObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDConnectTextObjects3Objects, 609, 140 + 80 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")), "");
}{for(var i = 0, len = gdjs.BrokerCode.GDConnectTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDConnectTextObjects3[i].returnVariable(gdjs.BrokerCode.GDConnectTextObjects3[i].getVariables().get("id")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")));
}
}{for(var i = 0, len = gdjs.BrokerCode.GDConnectTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDConnectTextObjects3[i].setZOrder(1);
}
}}

}


{


{
gdjs.BrokerCode.GDRemoveButtonObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDRemoveButtonObjects3Objects, 708, 120 + 80 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")), "");
}{for(var i = 0, len = gdjs.BrokerCode.GDRemoveButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDRemoveButtonObjects3[i].returnVariable(gdjs.BrokerCode.GDRemoveButtonObjects3[i].getVariables().get("id")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")));
}
}{for(var i = 0, len = gdjs.BrokerCode.GDRemoveButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDRemoveButtonObjects3[i].setZOrder(0);
}
}}

}


{


{
gdjs.BrokerCode.GDremoveObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDremoveObjects2Objects, 712, 140 + 80 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")), "");
}{for(var i = 0, len = gdjs.BrokerCode.GDremoveObjects2.length ;i < len;++i) {
    gdjs.BrokerCode.GDremoveObjects2[i].returnVariable(gdjs.BrokerCode.GDremoveObjects2[i].getVariables().get("id")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")));
}
}{for(var i = 0, len = gdjs.BrokerCode.GDremoveObjects2.length ;i < len;++i) {
    gdjs.BrokerCode.GDremoveObjects2[i].setZOrder(1);
}
}}

}


};gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDRemoveButtonObjects2Objects = Hashtable.newFrom({"RemoveButton": gdjs.BrokerCode.GDRemoveButtonObjects2});
gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDPasteButtonObjects3ObjectsGDgdjs_46BrokerCode_46GDPasteTextObjects3ObjectsGDgdjs_46BrokerCode_46GDidEntryObjects3ObjectsGDgdjs_46BrokerCode_46GDidEntryTextObjects3ObjectsGDgdjs_46BrokerCode_46GDidEntrySpriteObjects3ObjectsGDgdjs_46BrokerCode_46GDRemoveButtonObjects3ObjectsGDgdjs_46BrokerCode_46GDremoveObjects3ObjectsGDgdjs_46BrokerCode_46GDCopyButtonObjects3ObjectsGDgdjs_46BrokerCode_46GDCopyTextObjects3ObjectsGDgdjs_46BrokerCode_46GDConnectTextObjects3ObjectsGDgdjs_46BrokerCode_46GDConnectButtonObjects3Objects = Hashtable.newFrom({"PasteButton": gdjs.BrokerCode.GDPasteButtonObjects3, "PasteText": gdjs.BrokerCode.GDPasteTextObjects3, "idEntry": gdjs.BrokerCode.GDidEntryObjects3, "idEntryText": gdjs.BrokerCode.GDidEntryTextObjects3, "idEntrySprite": gdjs.BrokerCode.GDidEntrySpriteObjects3, "RemoveButton": gdjs.BrokerCode.GDRemoveButtonObjects3, "remove": gdjs.BrokerCode.GDremoveObjects3, "CopyButton": gdjs.BrokerCode.GDCopyButtonObjects3, "CopyText": gdjs.BrokerCode.GDCopyTextObjects3, "ConnectText": gdjs.BrokerCode.GDConnectTextObjects3, "ConnectButton": gdjs.BrokerCode.GDConnectButtonObjects3});
gdjs.BrokerCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ConnectButton"), gdjs.BrokerCode.GDConnectButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("ConnectText"), gdjs.BrokerCode.GDConnectTextObjects3);
gdjs.copyArray(runtimeScene.getObjects("CopyButton"), gdjs.BrokerCode.GDCopyButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("CopyText"), gdjs.BrokerCode.GDCopyTextObjects3);
gdjs.copyArray(runtimeScene.getObjects("PasteButton"), gdjs.BrokerCode.GDPasteButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("PasteText"), gdjs.BrokerCode.GDPasteTextObjects3);
gdjs.copyArray(gdjs.BrokerCode.GDRemoveButtonObjects2, gdjs.BrokerCode.GDRemoveButtonObjects3);

gdjs.copyArray(runtimeScene.getObjects("idEntry"), gdjs.BrokerCode.GDidEntryObjects3);
gdjs.copyArray(runtimeScene.getObjects("idEntrySprite"), gdjs.BrokerCode.GDidEntrySpriteObjects3);
gdjs.copyArray(runtimeScene.getObjects("idEntryText"), gdjs.BrokerCode.GDidEntryTextObjects3);
gdjs.copyArray(runtimeScene.getObjects("remove"), gdjs.BrokerCode.GDremoveObjects3);

gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BrokerCode.GDPasteButtonObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDPasteButtonObjects3[i].getVariableNumber(gdjs.BrokerCode.GDPasteButtonObjects3[i].getVariables().get("id")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDRemoveButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDRemoveButtonObjects3[0].getVariables()).get("id"))) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDPasteButtonObjects3[k] = gdjs.BrokerCode.GDPasteButtonObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDPasteButtonObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDPasteTextObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDPasteTextObjects3[i].getVariableNumber(gdjs.BrokerCode.GDPasteTextObjects3[i].getVariables().get("id")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDRemoveButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDRemoveButtonObjects3[0].getVariables()).get("id"))) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDPasteTextObjects3[k] = gdjs.BrokerCode.GDPasteTextObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDPasteTextObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDidEntryObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDidEntryObjects3[i].getVariableNumber(gdjs.BrokerCode.GDidEntryObjects3[i].getVariables().get("id")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDRemoveButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDRemoveButtonObjects3[0].getVariables()).get("id"))) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDidEntryObjects3[k] = gdjs.BrokerCode.GDidEntryObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDidEntryObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDidEntryTextObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDidEntryTextObjects3[i].getVariableNumber(gdjs.BrokerCode.GDidEntryTextObjects3[i].getVariables().get("id")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDRemoveButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDRemoveButtonObjects3[0].getVariables()).get("id"))) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDidEntryTextObjects3[k] = gdjs.BrokerCode.GDidEntryTextObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDidEntryTextObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDidEntrySpriteObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDidEntrySpriteObjects3[i].getVariableNumber(gdjs.BrokerCode.GDidEntrySpriteObjects3[i].getVariables().get("id")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDRemoveButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDRemoveButtonObjects3[0].getVariables()).get("id"))) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDidEntrySpriteObjects3[k] = gdjs.BrokerCode.GDidEntrySpriteObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDidEntrySpriteObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDRemoveButtonObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDRemoveButtonObjects3[i].getVariableNumber(gdjs.BrokerCode.GDRemoveButtonObjects3[i].getVariables().get("id")) == (gdjs.RuntimeObject.getVariableNumber(gdjs.BrokerCode.GDRemoveButtonObjects3[i].getVariables().get("id"))) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDRemoveButtonObjects3[k] = gdjs.BrokerCode.GDRemoveButtonObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDRemoveButtonObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDremoveObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDremoveObjects3[i].getVariableNumber(gdjs.BrokerCode.GDremoveObjects3[i].getVariables().get("id")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDRemoveButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDRemoveButtonObjects3[0].getVariables()).get("id"))) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDremoveObjects3[k] = gdjs.BrokerCode.GDremoveObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDremoveObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDCopyButtonObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDCopyButtonObjects3[i].getVariableNumber(gdjs.BrokerCode.GDCopyButtonObjects3[i].getVariables().get("id")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDRemoveButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDRemoveButtonObjects3[0].getVariables()).get("id"))) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDCopyButtonObjects3[k] = gdjs.BrokerCode.GDCopyButtonObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDCopyButtonObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDCopyTextObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDCopyTextObjects3[i].getVariableNumber(gdjs.BrokerCode.GDCopyTextObjects3[i].getVariables().get("id")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDRemoveButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDRemoveButtonObjects3[0].getVariables()).get("id"))) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDCopyTextObjects3[k] = gdjs.BrokerCode.GDCopyTextObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDCopyTextObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDConnectTextObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDConnectTextObjects3[i].getVariableNumber(gdjs.BrokerCode.GDConnectTextObjects3[i].getVariables().get("id")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDRemoveButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDRemoveButtonObjects3[0].getVariables()).get("id"))) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDConnectTextObjects3[k] = gdjs.BrokerCode.GDConnectTextObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDConnectTextObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDConnectButtonObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDConnectButtonObjects3[i].getVariableNumber(gdjs.BrokerCode.GDConnectButtonObjects3[i].getVariables().get("id")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDRemoveButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDRemoveButtonObjects3[0].getVariables()).get("id"))) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDConnectButtonObjects3[k] = gdjs.BrokerCode.GDConnectButtonObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDConnectButtonObjects3.length = k;}if (gdjs.BrokerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BrokerCode.GDConnectButtonObjects3 */
/* Reuse gdjs.BrokerCode.GDConnectTextObjects3 */
/* Reuse gdjs.BrokerCode.GDCopyButtonObjects3 */
/* Reuse gdjs.BrokerCode.GDCopyTextObjects3 */
/* Reuse gdjs.BrokerCode.GDPasteButtonObjects3 */
/* Reuse gdjs.BrokerCode.GDPasteTextObjects3 */
/* Reuse gdjs.BrokerCode.GDRemoveButtonObjects3 */
/* Reuse gdjs.BrokerCode.GDidEntryObjects3 */
/* Reuse gdjs.BrokerCode.GDidEntrySpriteObjects3 */
/* Reuse gdjs.BrokerCode.GDidEntryTextObjects3 */
/* Reuse gdjs.BrokerCode.GDremoveObjects3 */
{for(var i = 0, len = gdjs.BrokerCode.GDPasteButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDPasteButtonObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BrokerCode.GDPasteTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDPasteTextObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BrokerCode.GDidEntryObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BrokerCode.GDidEntryTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryTextObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BrokerCode.GDidEntrySpriteObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntrySpriteObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BrokerCode.GDRemoveButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDRemoveButtonObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BrokerCode.GDremoveObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDremoveObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BrokerCode.GDCopyButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDCopyButtonObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BrokerCode.GDCopyTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDCopyTextObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BrokerCode.GDConnectTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDConnectTextObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BrokerCode.GDConnectButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDConnectButtonObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.BrokerCode.GDStartObjects3);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.BrokerCode.GDStartButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("add"), gdjs.BrokerCode.GDaddObjects3);
gdjs.copyArray(runtimeScene.getObjects("addButton"), gdjs.BrokerCode.GDaddButtonObjects3);
{for(var i = 0, len = gdjs.BrokerCode.GDaddObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDaddObjects3[i].setY(gdjs.BrokerCode.GDaddObjects3[i].getY() - (80));
}
}{for(var i = 0, len = gdjs.BrokerCode.GDaddButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDaddButtonObjects3[i].setY(gdjs.BrokerCode.GDaddButtonObjects3[i].getY() - (80));
}
}{for(var i = 0, len = gdjs.BrokerCode.GDStartObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDStartObjects3[i].setY(gdjs.BrokerCode.GDStartObjects3[i].getY() - (80));
}
}{for(var i = 0, len = gdjs.BrokerCode.GDStartButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDStartButtonObjects3[i].setY(gdjs.BrokerCode.GDStartButtonObjects3[i].getY() - (80));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ConnectButton"), gdjs.BrokerCode.GDConnectButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("ConnectText"), gdjs.BrokerCode.GDConnectTextObjects3);
gdjs.copyArray(runtimeScene.getObjects("CopyButton"), gdjs.BrokerCode.GDCopyButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("CopyText"), gdjs.BrokerCode.GDCopyTextObjects3);
gdjs.copyArray(runtimeScene.getObjects("PasteButton"), gdjs.BrokerCode.GDPasteButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("PasteText"), gdjs.BrokerCode.GDPasteTextObjects3);
gdjs.copyArray(gdjs.BrokerCode.GDRemoveButtonObjects2, gdjs.BrokerCode.GDRemoveButtonObjects3);

gdjs.copyArray(runtimeScene.getObjects("idEntry"), gdjs.BrokerCode.GDidEntryObjects3);
gdjs.copyArray(runtimeScene.getObjects("idEntrySprite"), gdjs.BrokerCode.GDidEntrySpriteObjects3);
gdjs.copyArray(runtimeScene.getObjects("idEntryText"), gdjs.BrokerCode.GDidEntryTextObjects3);
gdjs.copyArray(runtimeScene.getObjects("remove"), gdjs.BrokerCode.GDremoveObjects3);

gdjs.BrokerCode.condition0IsTrue_0.val = false;
gdjs.BrokerCode.condition1IsTrue_0.val = false;
{
gdjs.BrokerCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDPasteButtonObjects3ObjectsGDgdjs_46BrokerCode_46GDPasteTextObjects3ObjectsGDgdjs_46BrokerCode_46GDidEntryObjects3ObjectsGDgdjs_46BrokerCode_46GDidEntryTextObjects3ObjectsGDgdjs_46BrokerCode_46GDidEntrySpriteObjects3ObjectsGDgdjs_46BrokerCode_46GDRemoveButtonObjects3ObjectsGDgdjs_46BrokerCode_46GDremoveObjects3ObjectsGDgdjs_46BrokerCode_46GDCopyButtonObjects3ObjectsGDgdjs_46BrokerCode_46GDCopyTextObjects3ObjectsGDgdjs_46BrokerCode_46GDConnectTextObjects3ObjectsGDgdjs_46BrokerCode_46GDConnectButtonObjects3Objects);
}if ( gdjs.BrokerCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.BrokerCode.GDPasteButtonObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDPasteButtonObjects3[i].getVariableNumber(gdjs.BrokerCode.GDPasteButtonObjects3[i].getVariables().get("id")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDPasteButtonObjects3[k] = gdjs.BrokerCode.GDPasteButtonObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDPasteButtonObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDPasteTextObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDPasteTextObjects3[i].getVariableNumber(gdjs.BrokerCode.GDPasteTextObjects3[i].getVariables().get("id")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDPasteTextObjects3[k] = gdjs.BrokerCode.GDPasteTextObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDPasteTextObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDidEntryObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDidEntryObjects3[i].getVariableNumber(gdjs.BrokerCode.GDidEntryObjects3[i].getVariables().get("id")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDidEntryObjects3[k] = gdjs.BrokerCode.GDidEntryObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDidEntryObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDidEntryTextObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDidEntryTextObjects3[i].getVariableNumber(gdjs.BrokerCode.GDidEntryTextObjects3[i].getVariables().get("id")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDidEntryTextObjects3[k] = gdjs.BrokerCode.GDidEntryTextObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDidEntryTextObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDidEntrySpriteObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDidEntrySpriteObjects3[i].getVariableNumber(gdjs.BrokerCode.GDidEntrySpriteObjects3[i].getVariables().get("id")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDidEntrySpriteObjects3[k] = gdjs.BrokerCode.GDidEntrySpriteObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDidEntrySpriteObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDRemoveButtonObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDRemoveButtonObjects3[i].getVariableNumber(gdjs.BrokerCode.GDRemoveButtonObjects3[i].getVariables().get("id")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDRemoveButtonObjects3[k] = gdjs.BrokerCode.GDRemoveButtonObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDRemoveButtonObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDremoveObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDremoveObjects3[i].getVariableNumber(gdjs.BrokerCode.GDremoveObjects3[i].getVariables().get("id")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDremoveObjects3[k] = gdjs.BrokerCode.GDremoveObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDremoveObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDCopyButtonObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDCopyButtonObjects3[i].getVariableNumber(gdjs.BrokerCode.GDCopyButtonObjects3[i].getVariables().get("id")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDCopyButtonObjects3[k] = gdjs.BrokerCode.GDCopyButtonObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDCopyButtonObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDCopyTextObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDCopyTextObjects3[i].getVariableNumber(gdjs.BrokerCode.GDCopyTextObjects3[i].getVariables().get("id")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDCopyTextObjects3[k] = gdjs.BrokerCode.GDCopyTextObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDCopyTextObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDConnectTextObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDConnectTextObjects3[i].getVariableNumber(gdjs.BrokerCode.GDConnectTextObjects3[i].getVariables().get("id")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDConnectTextObjects3[k] = gdjs.BrokerCode.GDConnectTextObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDConnectTextObjects3.length = k;for(var i = 0, k = 0, l = gdjs.BrokerCode.GDConnectButtonObjects3.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDConnectButtonObjects3[i].getVariableNumber(gdjs.BrokerCode.GDConnectButtonObjects3[i].getVariables().get("id")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("activeID")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDConnectButtonObjects3[k] = gdjs.BrokerCode.GDConnectButtonObjects3[i];
        ++k;
    }
}
gdjs.BrokerCode.GDConnectButtonObjects3.length = k;}}
if (gdjs.BrokerCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BrokerCode.GDConnectButtonObjects3 */
/* Reuse gdjs.BrokerCode.GDConnectTextObjects3 */
/* Reuse gdjs.BrokerCode.GDCopyButtonObjects3 */
/* Reuse gdjs.BrokerCode.GDCopyTextObjects3 */
/* Reuse gdjs.BrokerCode.GDPasteButtonObjects3 */
/* Reuse gdjs.BrokerCode.GDPasteTextObjects3 */
/* Reuse gdjs.BrokerCode.GDRemoveButtonObjects3 */
/* Reuse gdjs.BrokerCode.GDidEntryObjects3 */
/* Reuse gdjs.BrokerCode.GDidEntrySpriteObjects3 */
/* Reuse gdjs.BrokerCode.GDidEntryTextObjects3 */
/* Reuse gdjs.BrokerCode.GDremoveObjects3 */
{for(var i = 0, len = gdjs.BrokerCode.GDPasteButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDPasteButtonObjects3[i].setY(gdjs.BrokerCode.GDPasteButtonObjects3[i].getY() - (80));
}
for(var i = 0, len = gdjs.BrokerCode.GDPasteTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDPasteTextObjects3[i].setY(gdjs.BrokerCode.GDPasteTextObjects3[i].getY() - (80));
}
for(var i = 0, len = gdjs.BrokerCode.GDidEntryObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryObjects3[i].setY(gdjs.BrokerCode.GDidEntryObjects3[i].getY() - (80));
}
for(var i = 0, len = gdjs.BrokerCode.GDidEntryTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryTextObjects3[i].setY(gdjs.BrokerCode.GDidEntryTextObjects3[i].getY() - (80));
}
for(var i = 0, len = gdjs.BrokerCode.GDidEntrySpriteObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntrySpriteObjects3[i].setY(gdjs.BrokerCode.GDidEntrySpriteObjects3[i].getY() - (80));
}
for(var i = 0, len = gdjs.BrokerCode.GDRemoveButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDRemoveButtonObjects3[i].setY(gdjs.BrokerCode.GDRemoveButtonObjects3[i].getY() - (80));
}
for(var i = 0, len = gdjs.BrokerCode.GDremoveObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDremoveObjects3[i].setY(gdjs.BrokerCode.GDremoveObjects3[i].getY() - (80));
}
for(var i = 0, len = gdjs.BrokerCode.GDCopyButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDCopyButtonObjects3[i].setY(gdjs.BrokerCode.GDCopyButtonObjects3[i].getY() - (80));
}
for(var i = 0, len = gdjs.BrokerCode.GDCopyTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDCopyTextObjects3[i].setY(gdjs.BrokerCode.GDCopyTextObjects3[i].getY() - (80));
}
for(var i = 0, len = gdjs.BrokerCode.GDConnectTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDConnectTextObjects3[i].setY(gdjs.BrokerCode.GDConnectTextObjects3[i].getY() - (80));
}
for(var i = 0, len = gdjs.BrokerCode.GDConnectButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDConnectButtonObjects3[i].setY(gdjs.BrokerCode.GDConnectButtonObjects3[i].getY() - (80));
}
}{for(var i = 0, len = gdjs.BrokerCode.GDPasteButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDPasteButtonObjects3[i].returnVariable(gdjs.BrokerCode.GDPasteButtonObjects3[i].getVariables().get("id")).sub(1);
}
for(var i = 0, len = gdjs.BrokerCode.GDPasteTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDPasteTextObjects3[i].returnVariable(gdjs.BrokerCode.GDPasteTextObjects3[i].getVariables().get("id")).sub(1);
}
for(var i = 0, len = gdjs.BrokerCode.GDidEntryObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryObjects3[i].returnVariable(gdjs.BrokerCode.GDidEntryObjects3[i].getVariables().get("id")).sub(1);
}
for(var i = 0, len = gdjs.BrokerCode.GDidEntryTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryTextObjects3[i].returnVariable(gdjs.BrokerCode.GDidEntryTextObjects3[i].getVariables().get("id")).sub(1);
}
for(var i = 0, len = gdjs.BrokerCode.GDidEntrySpriteObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntrySpriteObjects3[i].returnVariable(gdjs.BrokerCode.GDidEntrySpriteObjects3[i].getVariables().get("id")).sub(1);
}
for(var i = 0, len = gdjs.BrokerCode.GDRemoveButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDRemoveButtonObjects3[i].returnVariable(gdjs.BrokerCode.GDRemoveButtonObjects3[i].getVariables().get("id")).sub(1);
}
for(var i = 0, len = gdjs.BrokerCode.GDremoveObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDremoveObjects3[i].returnVariable(gdjs.BrokerCode.GDremoveObjects3[i].getVariables().get("id")).sub(1);
}
for(var i = 0, len = gdjs.BrokerCode.GDCopyButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDCopyButtonObjects3[i].returnVariable(gdjs.BrokerCode.GDCopyButtonObjects3[i].getVariables().get("id")).sub(1);
}
for(var i = 0, len = gdjs.BrokerCode.GDCopyTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDCopyTextObjects3[i].returnVariable(gdjs.BrokerCode.GDCopyTextObjects3[i].getVariables().get("id")).sub(1);
}
for(var i = 0, len = gdjs.BrokerCode.GDConnectTextObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDConnectTextObjects3[i].returnVariable(gdjs.BrokerCode.GDConnectTextObjects3[i].getVariables().get("id")).sub(1);
}
for(var i = 0, len = gdjs.BrokerCode.GDConnectButtonObjects3.length ;i < len;++i) {
    gdjs.BrokerCode.GDConnectButtonObjects3[i].returnVariable(gdjs.BrokerCode.GDConnectButtonObjects3[i].getVariables().get("id")).sub(1);
}
}}

}


{


{
{runtimeScene.getVariables().get("PlayerCount").sub(1);
}}

}


};gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDConnectButtonObjects2Objects = Hashtable.newFrom({"ConnectButton": gdjs.BrokerCode.GDConnectButtonObjects2});
gdjs.BrokerCode.eventsList17 = function(runtimeScene) {

{

/* Reuse gdjs.BrokerCode.GDConnectButtonObjects2 */
gdjs.copyArray(runtimeScene.getObjects("idEntryText"), gdjs.BrokerCode.GDidEntryTextObjects2);

gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BrokerCode.GDidEntryTextObjects2.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDidEntryTextObjects2[i].getVariableNumber(gdjs.BrokerCode.GDidEntryTextObjects2[i].getVariables().get("id")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDConnectButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDConnectButtonObjects2[0].getVariables()).get("id"))) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDidEntryTextObjects2[k] = gdjs.BrokerCode.GDidEntryTextObjects2[i];
        ++k;
    }
}
gdjs.BrokerCode.GDidEntryTextObjects2.length = k;}if (gdjs.BrokerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BrokerCode.GDidEntryTextObjects2 */
{gdjs.evtTools.p2p.connect((( gdjs.BrokerCode.GDidEntryTextObjects2.length === 0 ) ? "" :gdjs.BrokerCode.GDidEntryTextObjects2[0].getString()));
}}

}


};gdjs.BrokerCode.eventsList18 = function(runtimeScene) {

{

/* Reuse gdjs.BrokerCode.GDConnectButtonObjects2 */

gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BrokerCode.GDConnectButtonObjects2.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDConnectButtonObjects2[i].getVariableBoolean(gdjs.BrokerCode.GDConnectButtonObjects2[i].getVariables().get("Connected"), false) ) {
        gdjs.BrokerCode.condition0IsTrue_0.val = true;
        gdjs.BrokerCode.GDConnectButtonObjects2[k] = gdjs.BrokerCode.GDConnectButtonObjects2[i];
        ++k;
    }
}
gdjs.BrokerCode.GDConnectButtonObjects2.length = k;}if (gdjs.BrokerCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.BrokerCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.BrokerCode.GDStartButtonObjects1});
gdjs.BrokerCode.eventsList19 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.BrokerCode.GDStartObjects1);
{for(var i = 0, len = gdjs.BrokerCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.BrokerCode.GDStartObjects1[i].setString("Starting");
}
}{for(var i = 0, len = gdjs.BrokerCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.BrokerCode.GDStartObjects1[i].setColor("50;200;50");
}
}}

}


};gdjs.BrokerCode.eventsList20 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("idEntrySprite"), gdjs.BrokerCode.GDidEntrySpriteObjects2);

gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
gdjs.BrokerCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDidEntrySpriteObjects2Objects, runtimeScene, true, false);
}if (gdjs.BrokerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BrokerCode.GDidEntrySpriteObjects2 */
{runtimeScene.getVariables().get("activeID").setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDidEntrySpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDidEntrySpriteObjects2[0].getVariables()).get("id"))));
}
{ //Subevents
gdjs.BrokerCode.eventsList13(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PasteButton"), gdjs.BrokerCode.GDPasteButtonObjects2);

gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
gdjs.BrokerCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDPasteButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.BrokerCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("idEntry"), gdjs.BrokerCode.GDidEntryObjects2);
{for(var i = 0, len = gdjs.BrokerCode.GDidEntryObjects2.length ;i < len;++i) {
    gdjs.BrokerCode.GDidEntryObjects2[i].activate(true);
}
}
{ //Subevents
gdjs.BrokerCode.eventsList14(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("addButton"), gdjs.BrokerCode.GDaddButtonObjects2);

gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
gdjs.BrokerCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDaddButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.BrokerCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.BrokerCode.eventsList15(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("RemoveButton"), gdjs.BrokerCode.GDRemoveButtonObjects2);

gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
gdjs.BrokerCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDRemoveButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.BrokerCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BrokerCode.GDRemoveButtonObjects2 */
{runtimeScene.getVariables().get("activeID").setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDRemoveButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDRemoveButtonObjects2[0].getVariables()).get("id"))));
}
{ //Subevents
gdjs.BrokerCode.eventsList16(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ConnectButton"), gdjs.BrokerCode.GDConnectButtonObjects2);

gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
gdjs.BrokerCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDConnectButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.BrokerCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.BrokerCode.eventsList18(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.BrokerCode.GDStartButtonObjects1);

gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
gdjs.BrokerCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.BrokerCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("PlayerCount").setNumber(1);
}{runtimeScene.getVariables().get("Step").setNumber(1);
}
{ //Subevents
gdjs.BrokerCode.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.BrokerCode.eventsList21 = function(runtimeScene) {

{


gdjs.BrokerCode.condition0IsTrue_0.val = false;
gdjs.BrokerCode.condition1IsTrue_0.val = false;
{
gdjs.BrokerCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.BrokerCode.condition0IsTrue_0.val ) {
{
{gdjs.BrokerCode.conditionTrue_1 = gdjs.BrokerCode.condition1IsTrue_0;
gdjs.BrokerCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11993684);
}
}}
if (gdjs.BrokerCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.BrokerCode.eventsList20(runtimeScene);} //End of subevents
}

}


};gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDcheckboxObjects1Objects = Hashtable.newFrom({"checkbox": gdjs.BrokerCode.GDcheckboxObjects1});
gdjs.BrokerCode.eventsList22 = function(runtimeScene) {

{



}


{


gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
{gdjs.BrokerCode.conditionTrue_1 = gdjs.BrokerCode.condition0IsTrue_0;
gdjs.BrokerCode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerCount")) + 1 < gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}if (gdjs.BrokerCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("PlayerCount").add(1);
}{runtimeScene.getVariables().get("Step").setNumber(1);
}}

}


{



}


{


gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
gdjs.BrokerCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Step")) == 2;
}if (gdjs.BrokerCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.sendDataToAll("go", "");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


};gdjs.BrokerCode.eventsList23 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("idEntryText"), gdjs.BrokerCode.GDidEntryTextObjects1);

gdjs.BrokerCode.condition0IsTrue_0.val = false;
gdjs.BrokerCode.condition1IsTrue_0.val = false;
{
gdjs.BrokerCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("ready", true);
}if ( gdjs.BrokerCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.BrokerCode.GDidEntryTextObjects1.length;i<l;++i) {
    if ( gdjs.BrokerCode.GDidEntryTextObjects1[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("PlayerCount"))).getChild("id")) ) {
        gdjs.BrokerCode.condition1IsTrue_0.val = true;
        gdjs.BrokerCode.GDidEntryTextObjects1[k] = gdjs.BrokerCode.GDidEntryTextObjects1[i];
        ++k;
    }
}
gdjs.BrokerCode.GDidEntryTextObjects1.length = k;}}
if (gdjs.BrokerCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BrokerCode.GDidEntryTextObjects1 */
gdjs.BrokerCode.GDcheckboxObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BrokerCode.mapOfGDgdjs_46BrokerCode_46GDcheckboxObjects1Objects, 45, 130 + 80 * (gdjs.RuntimeObject.getVariableNumber(((gdjs.BrokerCode.GDidEntryTextObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BrokerCode.GDidEntryTextObjects1[0].getVariables()).get("id"))), "");
}
{ //Subevents
gdjs.BrokerCode.eventsList22(runtimeScene);} //End of subevents
}

}


};gdjs.BrokerCode.eventsList24 = function(runtimeScene) {

{



}


{



}


{


gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
gdjs.BrokerCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Step")) == 1;
}if (gdjs.BrokerCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.sendDataTo(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("PlayerCount"))).getChild("id")), "ready", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getVariables().get("Step").setNumber(2);
}}

}


{



}


{


gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
gdjs.BrokerCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Step")) == 2;
}if (gdjs.BrokerCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.BrokerCode.eventsList23(runtimeScene);} //End of subevents
}

}


};gdjs.BrokerCode.eventsList25 = function(runtimeScene) {

{


gdjs.BrokerCode.condition0IsTrue_0.val = false;
{
gdjs.BrokerCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onError();
}if (gdjs.BrokerCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ErrorText"), gdjs.BrokerCode.GDErrorTextObjects1);
{for(var i = 0, len = gdjs.BrokerCode.GDErrorTextObjects1.length ;i < len;++i) {
    gdjs.BrokerCode.GDErrorTextObjects1[i].setString(gdjs.evtTools.p2p.getLastError());
}
}}

}


};gdjs.BrokerCode.eventsList26 = function(runtimeScene) {

{


gdjs.BrokerCode.eventsList1(runtimeScene);
}


{


gdjs.BrokerCode.eventsList2(runtimeScene);
}


{


gdjs.BrokerCode.eventsList10(runtimeScene);
}


{


gdjs.BrokerCode.eventsList12(runtimeScene);
}


{


gdjs.BrokerCode.eventsList21(runtimeScene);
}


{


gdjs.BrokerCode.eventsList24(runtimeScene);
}


{


gdjs.BrokerCode.eventsList25(runtimeScene);
}


};

gdjs.BrokerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BrokerCode.GDWelcomeTextObjects1.length = 0;
gdjs.BrokerCode.GDWelcomeTextObjects2.length = 0;
gdjs.BrokerCode.GDWelcomeTextObjects3.length = 0;
gdjs.BrokerCode.GDWelcomeTextObjects4.length = 0;
gdjs.BrokerCode.GDidTextObjects1.length = 0;
gdjs.BrokerCode.GDidTextObjects2.length = 0;
gdjs.BrokerCode.GDidTextObjects3.length = 0;
gdjs.BrokerCode.GDidTextObjects4.length = 0;
gdjs.BrokerCode.GDidEntryObjects1.length = 0;
gdjs.BrokerCode.GDidEntryObjects2.length = 0;
gdjs.BrokerCode.GDidEntryObjects3.length = 0;
gdjs.BrokerCode.GDidEntryObjects4.length = 0;
gdjs.BrokerCode.GDidEntryTextObjects1.length = 0;
gdjs.BrokerCode.GDidEntryTextObjects2.length = 0;
gdjs.BrokerCode.GDidEntryTextObjects3.length = 0;
gdjs.BrokerCode.GDidEntryTextObjects4.length = 0;
gdjs.BrokerCode.GDidEntrySpriteObjects1.length = 0;
gdjs.BrokerCode.GDidEntrySpriteObjects2.length = 0;
gdjs.BrokerCode.GDidEntrySpriteObjects3.length = 0;
gdjs.BrokerCode.GDidEntrySpriteObjects4.length = 0;
gdjs.BrokerCode.GDStartButtonObjects1.length = 0;
gdjs.BrokerCode.GDStartButtonObjects2.length = 0;
gdjs.BrokerCode.GDStartButtonObjects3.length = 0;
gdjs.BrokerCode.GDStartButtonObjects4.length = 0;
gdjs.BrokerCode.GDaddButtonObjects1.length = 0;
gdjs.BrokerCode.GDaddButtonObjects2.length = 0;
gdjs.BrokerCode.GDaddButtonObjects3.length = 0;
gdjs.BrokerCode.GDaddButtonObjects4.length = 0;
gdjs.BrokerCode.GDRemoveButtonObjects1.length = 0;
gdjs.BrokerCode.GDRemoveButtonObjects2.length = 0;
gdjs.BrokerCode.GDRemoveButtonObjects3.length = 0;
gdjs.BrokerCode.GDRemoveButtonObjects4.length = 0;
gdjs.BrokerCode.GDConnectButtonObjects1.length = 0;
gdjs.BrokerCode.GDConnectButtonObjects2.length = 0;
gdjs.BrokerCode.GDConnectButtonObjects3.length = 0;
gdjs.BrokerCode.GDConnectButtonObjects4.length = 0;
gdjs.BrokerCode.GDCopyButtonObjects1.length = 0;
gdjs.BrokerCode.GDCopyButtonObjects2.length = 0;
gdjs.BrokerCode.GDCopyButtonObjects3.length = 0;
gdjs.BrokerCode.GDCopyButtonObjects4.length = 0;
gdjs.BrokerCode.GDcheckboxObjects1.length = 0;
gdjs.BrokerCode.GDcheckboxObjects2.length = 0;
gdjs.BrokerCode.GDcheckboxObjects3.length = 0;
gdjs.BrokerCode.GDcheckboxObjects4.length = 0;
gdjs.BrokerCode.GDPasteButtonObjects1.length = 0;
gdjs.BrokerCode.GDPasteButtonObjects2.length = 0;
gdjs.BrokerCode.GDPasteButtonObjects3.length = 0;
gdjs.BrokerCode.GDPasteButtonObjects4.length = 0;
gdjs.BrokerCode.GDConnectTextObjects1.length = 0;
gdjs.BrokerCode.GDConnectTextObjects2.length = 0;
gdjs.BrokerCode.GDConnectTextObjects3.length = 0;
gdjs.BrokerCode.GDConnectTextObjects4.length = 0;
gdjs.BrokerCode.GDCopyTextObjects1.length = 0;
gdjs.BrokerCode.GDCopyTextObjects2.length = 0;
gdjs.BrokerCode.GDCopyTextObjects3.length = 0;
gdjs.BrokerCode.GDCopyTextObjects4.length = 0;
gdjs.BrokerCode.GDPasteTextObjects1.length = 0;
gdjs.BrokerCode.GDPasteTextObjects2.length = 0;
gdjs.BrokerCode.GDPasteTextObjects3.length = 0;
gdjs.BrokerCode.GDPasteTextObjects4.length = 0;
gdjs.BrokerCode.GDErrorTextObjects1.length = 0;
gdjs.BrokerCode.GDErrorTextObjects2.length = 0;
gdjs.BrokerCode.GDErrorTextObjects3.length = 0;
gdjs.BrokerCode.GDErrorTextObjects4.length = 0;
gdjs.BrokerCode.GDStartObjects1.length = 0;
gdjs.BrokerCode.GDStartObjects2.length = 0;
gdjs.BrokerCode.GDStartObjects3.length = 0;
gdjs.BrokerCode.GDStartObjects4.length = 0;
gdjs.BrokerCode.GDaddObjects1.length = 0;
gdjs.BrokerCode.GDaddObjects2.length = 0;
gdjs.BrokerCode.GDaddObjects3.length = 0;
gdjs.BrokerCode.GDaddObjects4.length = 0;
gdjs.BrokerCode.GDremoveObjects1.length = 0;
gdjs.BrokerCode.GDremoveObjects2.length = 0;
gdjs.BrokerCode.GDremoveObjects3.length = 0;
gdjs.BrokerCode.GDremoveObjects4.length = 0;

gdjs.BrokerCode.eventsList26(runtimeScene);
return;

}

gdjs['BrokerCode'] = gdjs.BrokerCode;
