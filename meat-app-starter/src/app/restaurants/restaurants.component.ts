import { Component, OnInit } from '@angular/core';

import { Restaurant } from './restaurant/restaurant.model'
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    console.log("vai buscar");

    this.restaurantsService.restaurants()
      .subscribe(prest => this.restaurants = prest)

    console.log("buscou");
  }

}
