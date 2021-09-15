import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header.component';

const routes: Routes = [{ path: '', component: HeaderComponent,
                        children:[{
                         path:'',
                         component:BodyComponent
                        }
                          
                        ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
