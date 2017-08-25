import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-members',
  templateUrl: './all-members.component.html',
  styleUrls: ['./all-members.component.css']
})
export class AllMembersComponent implements OnInit {

  constructor(private router: Router) { }

  members: Member[] = [
    new Member("Joel", 35, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis porttitor ultrices.", 10, 0),
    new Member("Amy", 20, "Duis iaculis luctus purus at molestie. Cras ac placerat dui. Quisque aliquam sit amet metus nec tempor. Nunc", 8, 1),
    new Member("John", 22, "Duis sed tellus lobortis, efficitur enim ut, malesuada magna. Nulla.", 3, 2),
    new Member("Kathryn", 26, "Sed sed lectus sed leo commodo efficitur at ac velit. Curabitur et tortor et dolor facilisis tempus in nec arcu.", 2, 3)
  ];

  ngOnInit() {
  }

  goToDetailPage(clickedMember: Member) {
    this.router.navigate(['members', clickedMember.id]);
  };

}
