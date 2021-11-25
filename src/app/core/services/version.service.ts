import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class VersionService {
  private version$: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  constructor() {}

  get version(): BehaviorSubject<number> {
    return this.version$;
  }

  public increment(): void {
    this.version$.next(this.version$.value + 1);
  }
}
