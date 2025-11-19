//
// Secure, robust localStorage abstraction for JSON data
//

// PUBLIC_INTERFACE
export function getStorage(key, defaultValue) {
  /** Safely gets and parses JSON from localStorage by key. 
      Returns defaultValue on error or if unavailable. */
  try {
    const raw = window.localStorage.getItem(key);
    if (raw == null) return defaultValue;
    return JSON.parse(raw);
  } catch (e) {
    // Log error (in production, route to logger)
    return defaultValue;
  }
}

// PUBLIC_INTERFACE
export function setStorage(key, value) {
  /** Safely serializes and stores value as JSON in localStorage. */
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // Log error (silently fails for quota/permission)
  }
}

// PUBLIC_INTERFACE
export function removeStorage(key) {
  try {
    window.localStorage.removeItem(key);
  } catch (e) {
    // Swallow
  }
}
