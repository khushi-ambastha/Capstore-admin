import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { VerficationComponent } from './components/signup/verification.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { HomeComponent } from './components/home/home.component';
import { VerifyMerchantComponent } from './components/merchant/verify-merchant/verify-merchant.component';
import { CouponCreationComponent } from './components/coupon-creation/coupon-creation.component';
import { ShowCouponComponent } from './components/show-coupon/show-coupon.component';
import { SendCouponComponent } from './components/send-coupon/send-coupon.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddDiscountComponent } from './components/add-discount/add-discount.component';
import { AddPromocodeComponent } from './components/add-promocode/add-promocode.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { MerchantListComponent } from './components/merchant/merchant-list/merchant-list.component';
import { ShowPromocodeComponent } from './components/show-promocode/show-promocode.component';
import { ShowDiscountComponent } from './components/show-discount/show-discount.component';
import { ThirdPartyMerchantComponent } from './components/merchant/third-party-merchant/third-party-merchant.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';
import { CommonfeedbackComponent } from './components/commonfeedback/commonfeedback.component';
import { UpdateMerchantComponent } from './components/merchant/update-merchant/update-merchant.component';
import { AddmerchantComponent } from './components/addmerchant/addmerchant.component';
//import { CommonFeedbackComponent } from './components/common-feedback/common-feedback.component';

const routes: Routes = [
  
  {path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'verify', component: VerficationComponent },
  { path: 'verifyMerchant/:userId', component: VerifyMerchantComponent },
  { path: 'homepage', component: HomePageComponent },
  { path: 'productpage', component: ProductPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'applyCoupon/:couponId/:userId', component:ShowCouponComponent},
  { path: 'sendCoupon/:couponId', component:SendCouponComponent},
  {path:'login', component:LoginComponent},
  {path: 'addProducts',component:AddProductComponent},
  {path:'productList', component:ProductListComponent},
  {path:'admin',component:AdminComponent},
  {path:'addDiscount',component:AddDiscountComponent},
  {path:'addPromocode',component:CouponCreationComponent},
  {path:'showCustomer',component:CustomerListComponent},
  {path:'showMerchant',component:MerchantListComponent},
  {path:'showPromocode',component:ShowPromocodeComponent},
  {path:'showDiscount',component:ShowDiscountComponent},
  {path:'showProduct',component:ProductListComponent},
  {path:'thirdparty',component:ThirdPartyMerchantComponent},
  {path:'updateProduct',component:UpdateProductComponent},
  {path:'updateCategory',component:UpdateCategoryComponent},
  {path:'addMerchant', component:AddmerchantComponent},
  {path:'updateMerchant', component:UpdateMerchantComponent},
  {path:'PendingFeedbacks' , component:CommonfeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = [
  LoginComponent,
  SignupComponent,
  VerficationComponent,
];

