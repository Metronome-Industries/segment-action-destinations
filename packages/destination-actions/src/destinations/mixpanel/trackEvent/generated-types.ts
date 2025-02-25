// Generated file. DO NOT MODIFY IT BY HAND.

export interface Payload {
  /**
   * A distinct ID specified by you.
   */
  distinct_id?: string
  /**
   * A device-specific identifier, such as the Identifier for Vendor on iOS. Required unless user ID is present. If a device ID is not sent with the event, it will be set to a hashed version of the user ID.
   */
  device_id?: string
  /**
   * A unique identifier for your event.
   */
  event: string
  /**
   * The timestamp of the event. If time is not sent with the event, it will be set to the request upload time.
   */
  time?: string | number
  /**
   * An object of key-value pairs that represent additional data to be sent along with the event.
   */
  event_properties?: {
    [k: string]: unknown
  }
  /**
   * An object of key-value pairs that represent additional data tied to the user.
   */
  user_properties?: {
    [k: string]: unknown
  }
  /**
   * The name of your application
   */
  app_name?: string
  /**
   * The namespace of your application.
   */
  app_namespace?: string
  /**
   * The current build of your application.
   */
  app_build?: string
  /**
   * The current version of your application.
   */
  app_version?: string
  /**
   * The name of the mobile operating system or browser that the user is using.
   */
  os_name?: string
  /**
   * The version of the mobile operating system or browser the user is using.
   */
  os_version?: string
  /**
   * The type of the user's device
   */
  device_type?: string
  /**
   * The name of the user's device
   */
  device_name?: string
  /**
   * The device manufacturer that the user is using.
   */
  device_manufacturer?: string
  /**
   * The device model that the user is using.
   */
  device_model?: string
  /**
   * Whether bluetooth is enabled
   */
  bluetooth?: boolean
  /**
   * The carrier that the user is using.
   */
  carrier?: string
  /**
   * Whether cellular was enabled
   */
  cellular?: boolean
  /**
   * The current country of the user.
   */
  country?: string
  /**
   * The current region of the user.
   */
  region?: string
  /**
   * The language set by the user.
   */
  language?: string
  /**
   * Library name
   */
  library_name?: string
  /**
   * Library version
   */
  library_version?: string
  /**
   * The IP address of the user. Use "$remote" to use the IP address on the upload request.
   */
  ip?: string
  /**
   * Identifier for Advertiser. _(iOS)_
   */
  idfa?: string
  /**
   * UTM Tracking Properties
   */
  utm_properties?: {
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
    utm_term?: string
    utm_content?: string
  }
  /**
   * The full URL of the webpage on which the event is triggered.
   */
  url?: string
  /**
   * Set to true if user’s device has an active, available Wifi connection, false if not.
   */
  wifi?: boolean
  /**
   * Width, in pixels, of the device screen.
   */
  screen_width?: number
  /**
   * Height, in pixels, of the device screen.
   */
  screen_height?: number
  /**
   * Pixel density of the device screen.
   */
  screen_density?: number
  /**
   * Referrer url
   */
  referrer?: string
  /**
   * User agent
   */
  userAgent?: string
}
