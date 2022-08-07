
if (typeof gdjs.evtsExt__Sanitizer__removeNewLines !== "undefined") {
  gdjs.evtsExt__Sanitizer__removeNewLines.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Sanitizer__removeNewLines = {};

gdjs.evtsExt__Sanitizer__removeNewLines.conditionTrue_0 = {val:false};
gdjs.evtsExt__Sanitizer__removeNewLines.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Sanitizer__removeNewLines.userFunc0x8b6898 = function(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = eventsFunctionContext.getArgument("text").replace(/\r?\n|\r/g, ' ');
};
gdjs.evtsExt__Sanitizer__removeNewLines.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__Sanitizer__removeNewLines.userFunc0x8b6898(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Sanitizer__removeNewLines.func = function(runtimeScene, text, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "text") return text;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Sanitizer__removeNewLines.eventsList0(runtimeScene, eventsFunctionContext);
return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Sanitizer__removeNewLines.registeredGdjsCallbacks = [];