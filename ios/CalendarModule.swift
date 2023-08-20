@objc(CalendarModule)
class CalendarModule: NSObject {

  @objc(createCalendarEvent:withLocation:withResolver:withRejecter:)
  func createCalendarEvent(name: String, location: String, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) -> Void {
    resolve("calendar create with \(name) \(location)")
  }
}
