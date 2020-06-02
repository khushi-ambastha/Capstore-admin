import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapstoreService } from './service/capstore.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmEqualValidatorDirective } from './Shared/confirm-equal-validator.directive';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { VerficationComponent } from './components/signup/verification.component';
import { HomeComponent } from './components/home/home.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { VerifyMerchantComponent } from './components/merchant/verify-merchant/verify-merchant.component';
import { CouponCreationComponent } from './components/coupon-creation/coupon-creation.component';
import { ShowCouponComponent } from './components/show-coupon/show-coupon.component'
import { SendCouponComponent } from './components/send-coupon/send-coupon.component';
import { MerchantListComponent } from './components/merchant/merchant-list/merchant-list.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddDiscountComponent } from './components/add-discount/add-discount.component';
import { AddPromocodeComponent } from './components/add-promocode/add-promocode.component';
import { ShowDiscountComponent } from './components/show-discount/show-discount.component';
import { ShowPromocodeComponent } from './components/show-promocode/show-promocode.component';
import { FilterCustomerPipe } from './pipe/filter-customer.pipe';
import { FilterMerchantPipe } from './pipe/filter-merchant.pipe';
import { FilterProductPipe } from './pipe/filter-product.pipe';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ThirdPartyMerchantComponent } from './components/merchant/third-party-merchant/third-party-merchant.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';
import { UpdateMerchantComponent } from './components/merchant/update-merchant/update-merchant.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';;
import { CommonfeedbackComponent } from './components/commonfeedback/commonfeedback.component'
;
import { AddmerchantComponent } from './components/addmerchant/addmerchant.component'

@NgModule({
  declarations: [
    AppComponent,
    ConfirmEqualValidatorDirective,
    SignupComponent,
    LoginComponent,
    VerficationComponent,
    HomeComponent,
    HomePageComponent,
    ProductPageComponent,
    VerifyMerchantComponent,
    CouponCreationComponent ,
    ShowCouponComponent ,
    SendCouponComponent,
  
    MerchantListComponent,
    CustomerListComponent,
    AdminComponent,
    AddDiscountComponent,
    AddPromocodeComponent,
    ShowDiscountComponent,
    ShowPromocodeComponent,
    FilterCustomerPipe,
    FilterMerchantPipe,
    FilterProductPipe,
    ProductListComponent,
    AddProductComponent,
    ThirdPartyMerchantComponent,
    UpdateCategoryComponent,
    UpdateMerchantComponent,
    UpdateProductComponent,
    CommonfeedbackComponent
,
    AddmerchantComponent  ],

    
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CapstoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}