package com.testmodule;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.bridge.Promise;

import android.util.Log;

@ReactModule(name = CalendarModule.NAME)
public class CalendarModule extends ReactContextBaseJavaModule {
  public static final String NAME = "CalendarModule";

  CalendarModule(ReactApplicationContext context) {
    super(context);
  }

  @Override
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void createCalendarEvent(String name, String location, Promise promise) {
    promise.resolve("create event " + name + " " + location);
  }
}
