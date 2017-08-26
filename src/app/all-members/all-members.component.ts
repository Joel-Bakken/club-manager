import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-all-members',
  templateUrl: './all-members.component.html',
  styleUrls: ['./all-members.component.css'],
  providers: [MemberService]
})
export class AllMembersComponent implements OnInit {
  members: FirebaseListObservable<any[]>;


  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  goToDetailPage(clickedMember: Member) {
    this.router.navigate(['members', clickedMember.id]);
  };

}
