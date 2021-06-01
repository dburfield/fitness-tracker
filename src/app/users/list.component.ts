import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { UserService } from '@app/_services';
import { User } from '@app/_models';

import { MatTableDataSource } from '@angular/material/table';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
  users!: User[];
  successRate: number = 0;
  filtervalue: string = '';
  
  displayedColumns: string[] = [
    'goalName',
    'goalType',
    'frequency',
    'duration',
    'checkin',
    'cta',
  ];
  dataSource!: MatTableDataSource<User>;

  constructor(private userService: UserService) {}

  calcSuccessrate(count: number, frequency: number, duration: number) {
    let successRate: number = ((count * frequency) / duration) * 100;
    return Math.round(successRate);
  }

  ngOnInit() {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe(
        (response) => (this.dataSource = new MatTableDataSource(response))
      );
    this.dataSource = new MatTableDataSource(this.users);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource);
  }

  deleteUser(id: string) {
    const user = this.users.find((x) => x.id === id);
    if (!user) return;
    user.isDeleting = true;
    this.userService
      .delete(id)
      .pipe(first())
      .subscribe(() => (this.users = this.users.filter((x) => x.id !== id)));
  }
}
