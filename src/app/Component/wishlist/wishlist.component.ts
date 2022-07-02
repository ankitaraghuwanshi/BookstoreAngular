import { Component, OnInit } from '@angular/core';
import { WishService } from 'src/app/Services/wish.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishArray:any
  BookId: any

  constructor(private wishservice:WishService) { }

  ngOnInit(): void {
    this.BookId = localStorage.getItem('bookId')
    this. getWishlist();
  }

  getWishlist() {
    this.wishservice. getwishList().subscribe(
      (response: any) => {
        this.wishArray = response.response;
        console.log(response);


      }
    )
  }

  removeBookfromWishlist(wishlistId: any) {
    let data = {
      WishListId : wishlistId
    }
    console.log(wishlistId)
    this.wishservice.removeingWish(data).subscribe((response: any) => {
      this. getWishlist()
      console.log('Removed form wishlist', response);

    })
  }
}
