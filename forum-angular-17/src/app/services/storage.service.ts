// import { Injectable, InjectionToken, PLATFORM_ID } from '@angular/core';
// import { isPlatformBrowser, isPlatformServer } from '@angular/common';

// export interface IStorage<T> {
//   setItem(key: string, item: T): T;
//   getItem(key: string): T | null;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class StorageService implements IStorage<any> {
//   setItem<T>(key: string, item: T): T {
//     return item;
//   }

//   getItem<T>(key: string): T | null {
//     return null;
//   }
// }

// export const PLATFORM_STORAGE = new InjectionToken<IStorage<any>>('PLATFORM_STORAGE');

// @Injectable({
//   providedIn: 'root',
//   useFactory: storageFactory,
//   deps: [PLATFORM_ID]
// })
// export class PlatformStorageService implements IStorage<any> {
//   constructor(private storageService: StorageService) {}

//   setItem<T>(key: string, item: T): T {
//     return this.storageService.setItem(key, item);
//   }

//   getItem<T>(key: string): T | null {
//     return this.storageService.getItem(key);
//   }
// }

// export function storageFactory(platformId: Object): StorageService {
//   if (isPlatformBrowser(platformId)) {
//     return new BrowserStorage();
//   }
//   if (isPlatformServer(platformId)) {
//     return new ServerStorage();
//   }
//   throw new Error('No implementation for this platform: ' + platformId);
// }

// export class BrowserStorage implements IStorage<any> {
//   localStorage = localStorage;

//   setItem<T>(key: string, item: T): T {
//     const str = typeof item === 'string' ? item : JSON.stringify(item);
//     this.localStorage.setItem(key, str);
//     return item;
//   }

//   getItem<T>(key: string): any | null {
//     const tmp = this.localStorage.getItem(key);
//     if (!tmp) { return null; }
//     try {
//       return JSON.parse(tmp);
//     } catch {
//       return tmp;
//     }
//   }
// }
// export class ServerStorage implements IStorage<any> {
//   private data: { [key: string]: any } = {};

//   setItem<T>(key: string, item: T): T {
//     this.data[key] = item;
//     return item;
//   }

//   getItem<T>(key: string): T | null {
//     return this.data[key] || null;
//   }
// }

import { Provider, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

interface IStorage {
  setItem<T>(key: string, item: T): T;
  getItem<T>(key: string): T | null; // Добавяне на null към типа на връщане
}

export class StorageService implements IStorage {
  setItem<T>(key: string, item: T): T {
    return item;
  }

  getItem<T>(key: string): T | null {
    return null;
  }
}

export function storageFactory(platformId: Object): IStorage {
  // Уточняване на типа за platformId
  if (isPlatformBrowser(platformId)) {
    return new BrowserStorage();
  }
  if (isPlatformServer(platformId)) {
    return new ServerStorage();
  }
  throw new Error(
    'No implementation for this platform: ' + platformId.toString()
  );
}

export const storageServiceProvider: Provider = {
  provide: StorageService,
  useFactory: storageFactory,
  deps: [PLATFORM_ID],
};

export class BrowserStorage implements IStorage {
  localStorage = localStorage;

  setItem<T>(key: string, item: T): T {
    const str = typeof item === 'string' ? item : JSON.stringify(item);
    this.localStorage.setItem(key, str);
    return item;
  }

  getItem<T>(key: string): any | null {
    const tmp = this.localStorage.getItem(key);
    if (!tmp) {
      return null;
    }
    try {
      return JSON.parse(tmp);
    } catch {
      return tmp;
    }
  }
}



export class ServerStorage implements IStorage {
  private data: { [key: string]: any };

  constructor() {
    this.data = {};
  }
  setItem<T>(key: string, item: T): T {
    throw new Error('Method not implemented.');
  }
  getItem<T>(key: string): T | null {
    throw new Error('Method not implemented.');
  }

  saveItem<T>(key: string, item: T): void {
    const str = JSON.stringify(item);
    this.data[key] = str;
  }

  loadItem<T>(key: string): T | null {
    const str = this.data[key];
    if (!str) {
      return null;
    }
    try {
      const parsedItem: T = JSON.parse(str);
      return parsedItem;
    } catch {
      return null;
    }
  }
}
