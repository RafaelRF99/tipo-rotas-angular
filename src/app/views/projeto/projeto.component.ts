import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.scss'],
})
export class ProjetoComponent {
  constructor(private activeRouter: ActivatedRoute, private router: Router) {
    this.activeRouter.params.subscribe((res) => {
      console.log(res);
    });

    this.activeRouter.queryParams.subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit() {
    setInterval(() => {
      this.router.navigate(['/']);
    }, 5000);
  }
}
