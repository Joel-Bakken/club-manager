import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';

@Component({
  selector: 'app-all-members',
  templateUrl: './all-members.component.html',
  styleUrls: ['./all-members.component.css']
})
export class AllMembersComponent implements OnInit {
  members: Member[] = [
    new Member("Joel", 35, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis porttitor ultrices.", 10),
    new Member("Amy", 20, "Duis iaculis luctus purus at molestie. Cras ac placerat dui. Quisque aliquam sit amet metus nec tempor. Nunc", 8),
    new Member("John", 22, "Duis sed tellus lobortis, efficitur enim ut, malesuada magna. Nulla.", 3),
    new Member("Kathryn", 26, "Sed sed lectus sed leo commodo efficitur at ac velit. Curabitur et tortor et dolor facilisis tempus in nec arcu.", 2)
  ];

  constructor() { }

  ngOnInit() {
  }

}
