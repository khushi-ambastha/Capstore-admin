package com.example.main.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "merchant_details")
public class MerchantDetails extends User{

	@Column(name = "phone_number")
	private String phoneNumber;
	@Column(name = "alternate_phone_number")
	private String alternatePhoneNumber;
	@Column(name = "alternate_email")
	private String alternateEmail;
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, targetEntity = Product.class)
	@JoinColumn(name="user_id")
	private Set<Product> products;
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, targetEntity = UserAddress.class)
	private Set<UserAddress> addresses;
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, targetEntity = ProductFeedback.class)
	private Set<ProductFeedback> pF;
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, targetEntity = Coupon.class)
	Set<Coupon> coupons;
    @Column(name = "is_approved")
    private boolean isApproved;
    @Column(name = "rating")
    private int rating;

	
	
	public Set<ProductFeedback> getpF() {
		return pF;
	}
	public void setpF(Set<ProductFeedback> pF) {
		this.pF = pF;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getAlternatePhoneNumber() {
		return alternatePhoneNumber;
	}
	public void setAlternatePhoneNumber(String alternatePhoneNumber) {
		this.alternatePhoneNumber = alternatePhoneNumber;
	}
	public String getAlternateEmail() {
		return alternateEmail;
	}
	public void setAlternateEmail(String alternateEmail) {
		this.alternateEmail = alternateEmail;
	}
	
	public Set<Product> getProducts() { return products; } 
	public void setProducts(Set<Product> products) { this.products = products; }
	
	public Set<UserAddress> getAddresses() { return addresses; } 
	public void setAddresses(Set<UserAddress> addresses) { this.addresses = addresses; }
	
	public Set<Coupon> getCoupons() { return coupons; }
	public void setCoupons(Set<Coupon> coupons) { this.coupons = coupons; }
	 
	public boolean isApproved() {
		return isApproved;
	}
	public void setApproved(boolean isApproved) {
		this.isApproved = isApproved;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	
	public Set<ProductFeedback> getProductFeedback() {
		return pF;
	}
	public void setProductFeedback(Set<ProductFeedback> productFeedback) {
		this.pF = productFeedback;
	}
	public MerchantDetails() {
		super();
	}
	
	public MerchantDetails(int userId, String name, String username, String password, String email, String role,
			boolean isActive, String securityQuestion, String securityAnswer, String phoneNumber,
			String alternatePhoneNumber, String alternateEmail, Set<Product> products, Set<UserAddress> addresses,
			Set<ProductFeedback> pF, Set<Coupon> coupons, boolean isApproved, int rating) {
		super(userId, name, username, password, email, role, isActive, securityQuestion, securityAnswer);
		this.phoneNumber = phoneNumber;
		this.alternatePhoneNumber = alternatePhoneNumber;
		this.alternateEmail = alternateEmail;
		this.products = products;
		this.addresses = addresses;
		this.pF = pF;
		this.coupons = coupons;
		this.isApproved = isApproved;
		this.rating = rating;
	}
	@Override
	public String toString() {
		return "MerchantDetails [phoneNumber=" + phoneNumber + ", alternatePhoneNumber=" + alternatePhoneNumber
				+ ", alternateEmail=" + alternateEmail + ", products=" + products + ", addresses=" + addresses + ", pF="
				+ pF + ", coupons=" + coupons + ", isApproved=" + isApproved + ", rating=" + rating + ", getUserId()="
				+ getUserId() + ", getName()=" + getName() + ", getUsername()=" + getUsername() + ", getPassword()="
				+ getPassword() + ", getEmail()=" + getEmail() + ", getRole()=" + getRole() + ", isActive()="
				+ isActive() + ", getSecurityQuestion()=" + getSecurityQuestion() + ", getSecurityAnswer()="
				+ getSecurityAnswer() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}
	
	
}