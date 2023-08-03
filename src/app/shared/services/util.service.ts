import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  public endpoint_base: string = 'http://localhost/apijack';

  private listSource = new BehaviorSubject<any[]>([]);
  $getListSource = this.listSource.asObservable();

  private objectSource = new BehaviorSubject<{}>({});
  $getObjectSource = this.objectSource.asObservable();

  constructor() { }

  enviarObject(data: any) {
    this.objectSource.next(data);
  }

  enviarList(list: any[]) {
    this.listSource.next(list);
  }

  objectToFormData(obj: any, form?: any, namespace?: any) {
    let fd: any = form || new FormData();
    let formKey: any;
    for (let property in obj) {
      if (obj.hasOwnProperty(property) && obj[property]) {
        if (namespace) {
          formKey = namespace + '[' + property + ']';
        } else {
          formKey = property;
        }
        if (obj[property] instanceof Date) {
          fd.append(formKey, obj[property].toISOString());
        }
        if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
          this.objectToFormData(obj[property], fd, formKey);
        } else {
          fd.append(formKey, obj[property]);
        }
      }
    }
    return fd;
  };

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving', e);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key)!);
    } catch (e) {
      console.error('Error al obtener la data', e);
      return null;
    }
  }

  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error al eliminar el key', e);
    }
  }

  clear(): void {
    try {
      localStorage.clear();
    } catch (e) {
      console.error('Error al limpiar el localstorage', e);
    }
  }
}
