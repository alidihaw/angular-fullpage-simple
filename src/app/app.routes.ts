import { Routes } from '@angular/router';
import { BasicExampleComponent } from './examples/basic/basic.component';
import { DynamicChangesExampleComponent } from './examples/dynamic-changes/dynamic-changes.component';
import { DynamicNgForComponent } from './examples/dynamic-ng-for/dynamic-ng-for.component';
import { ScrollOverflowExampleComponent } from './examples/scrolloverflow/scrolloverflow.component';
import { TypeExampleComponent } from './examples/type-definitions/type.component';
import { UsingDirectiveComponent } from './examples/using-directive/using-directive.component';
import { SimpleExampleComponent } from './examples/simple/simple.component';

export const routes: Routes = [
  { path: '', component: SimpleExampleComponent, pathMatch: 'full' },
  { path: 'basic', component: BasicExampleComponent, pathMatch: 'full' },
  { path: 'dynamicChanges', component: DynamicChangesExampleComponent },
  { path: 'scrollOverflow', component: ScrollOverflowExampleComponent },
  { path: 'typeDefinitions', component: TypeExampleComponent },
  { path: 'dynamicNgFor', component: DynamicNgForComponent },
  { path: 'usingDirective', component: UsingDirectiveComponent },
];
