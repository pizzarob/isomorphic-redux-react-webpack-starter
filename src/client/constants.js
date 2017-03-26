function keyMirror(obj) {
  const out = {};
  Object.keys(obj).forEach(key => {
    out[key] = key;
  });
  return out;
}

export const actions = keyMirror({
  ADD_TODO: null,
  REMOVE_TODO: null,
  TOGGLE_TODO: null,
  UPDATE_UI: null,
});
