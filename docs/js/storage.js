// storage.js — wrapper around localStorage with optional TTL
export const Storage = {
  set(key, value, ttlMs){
    const rec = { v: value, e: ttlMs ? Date.now() + ttlMs : null };
    localStorage.setItem(key, JSON.stringify(rec));
  },
  get(key){
    try{
      const raw = localStorage.getItem(key);
      if(!raw) return null;
      const rec = JSON.parse(raw);
      if(rec.e && Date.now() > rec.e){ localStorage.removeItem(key); return null; }
      return rec.v;
    }catch{ return null; }
  },
  remove(key){ localStorage.removeItem(key); }
};
