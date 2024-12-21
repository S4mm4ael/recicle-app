import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoadingComponent } from './loading.component';
import { StoreModule } from '@ngrx/store';
import { loadingReducer } from 'src/app/store/loading/loading.reducers';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingComponent],
      imports: [
        IonicModule.forRoot(),
        IonicModule.forRoot(),
        StoreModule.forFeature('loading', loadingReducer),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide loading component when show is false', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('ion-spinner')).toBeNull();
  });
});
