import { Component, computed, OnInit, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-tareo-staff',
  standalone: true,
  imports: [],
  templateUrl: './tareo-staff.component.html',
  styleUrl: './tareo-staff.component.css'
})
export class TareoStaffComponent implements OnInit {

  count: WritableSignal<number> = signal(0); // Señal
  doubleCount: Signal<string> = computed(() => {
    if(this.count() === 0) {
      return `El count es 0`
    }
    else if (this.count() % 2 === 0) {
      return `El count es par`
    } else {
      return `El count es impar`
    }
  }) // Se ejecuta cuando la señal se actualiza, no se puedes sobrescribir

  constructor() {

  }
  ngOnInit(): void {
    console.log(this.count())
  }

  fnIncrementar() {
    this.count.update( value => value + 1 )
  }

  fnResetear() {
    this.count.set(0)
  }
}
