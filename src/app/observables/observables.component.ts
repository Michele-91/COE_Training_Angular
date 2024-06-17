import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, catchError, concat, delay, delayWhen, filter, from, fromEvent, interval, map, merge, of, pluck, reduce, retry, retryWhen, shareReplay, take, takeUntil, tap, throwError, timeout, timer } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent {

  // 5
  // private destroy$ = new Subject<void>();

  constructor() {
    // 1
    // const numbers$ = of([1, 2, 3, 4, 5]);
    // numbers$.subscribe((data) => {
    //   console.log('of subscriber', data);
    // });

    // 2
    // const numbers$ = from([1, 2, 3, 4, 5]);
    // numbers$.subscribe((data) => {
    //   console.log('from subscriber', data);
    // });

    // 2.1
    // const users = [
    //   {id: '1', name: 'Michele', age: 33},
    //   {id: '2', name: 'Daniele', age: 35},
    //   {id: '3', name: 'Erik', age: 23},
    // ]
    // const messagePromise = new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve('Promise resolved');
    //   }, 1000);
    // })
    // const users$ = of(users);
    // const message$ = from(messagePromise);
    // const bodyClick$ = fromEvent(document, 'click');
    // users$.subscribe((users) => {
    //   console.log('users', users);
    // })
    // message$.subscribe((message) => {
    //   console.log('message', message);
    // })
    // bodyClick$.subscribe((event) => {
    //   console.log("event", event);
    // })


    // 3
    // const observable$ = interval(1000);
    // observable$.subscribe(value => console.log(value));

    //4
    // const observable$ = interval(1000);
    // const subscription = observable$.subscribe(value => console.log(value));
    // setTimeout(() => {
    //   subscription.unsubscribe();
    //   console.log('Unsubscribed');
    // }, 5000);

    // 5
    // interval(1000).pipe(
    //   takeUntil(this.destroy$)
    // ).subscribe(value => console.log(value));


    // 6
    // const numbers$ = of(1, 2, 3, 4, 5).pipe(
    //   map(value => value * 2)
    // );
    // numbers$.subscribe(value => console.log(value));

    //7
    // const numbers$ = of(1, 2, 3, 4, 5).pipe(
    //   filter(value => value % 2 === 0)
    // );
    // numbers$.subscribe(value => console.log(value));


    //8
    // const items = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
    // const filteredItems: string[] = [];
    // of(...items).pipe(
    //   filter(item => item.startsWith('a') || item.startsWith('e'))
    // ).subscribe(filteredItem => filteredItems.push(filteredItem));
    // console.log(filteredItems);

    // 6
    // const numbers$ = of(1, 2, 3, 4, 5).pipe(
    //   map(value => value * 2),       // Multiply each value by 2
    //   filter(value => value > 5),    // Only values greater than 5
    //   reduce((acc, value) => acc + value, 0) // Sum the values
    // );
    // numbers$.subscribe({
    //   next: value => console.log('Sum:', value),
    //   complete: () => console.log('Completed')
    // });


    // 9
    // const observable1$ = of('Hello').pipe(delay(1000));
    // const observable2$ = of('World').pipe(delay(2000));
    // const merged$ = merge(observable1$, observable2$);
    // merged$.subscribe(value => console.log(value));

    // 10
    // const observable1$ = of('First').pipe(delay(1000));
    // const observable2$ = of('Second').pipe(delay(2000));
    // const concatenated$ = concat(observable1$, observable2$);
    // concatenated$.subscribe(value => console.log(value));

    // 11
    // const observable$ = new Observable(observer => {
    //   observer.next('Value 1');
    //   observer.next('Value 2');
    //   observer.next('Value 3');
    //   observer.complete();
    // });
    // const subscription = observable$.subscribe({
    //   next: value => console.log('Next:', value),
    //   error: err => console.error('Error:', err),
    //   complete: () => console.log('Completed')
    // });

    // 12
    // const observable$ = new Observable(observer => {
    //   observer.next('Value 1');
    //   observer.error('Something went wrong!');
    //   observer.next('Value 2'); // This will not be emitted
    // });
    // const subscription = observable$.subscribe({
    //   next: value => console.log('Next:', value),
    //   error: err => console.error('Error:', err),
    //   complete: () => console.log('Completed')
    // });


    // 13
    // const source$ = throwError(() => 'An error occurred!').pipe(
    //   catchError(err => {
    //     console.error('Error:', err);
    //     return of('Recovered from error');
    //   })
    // );
    // source$.subscribe({
    //   next: value => console.log('Next:', value),
    //   error: err => console.error('Error:', err),
    //   complete: () => console.log('Completed')
    // });


    // 14
    // const source$ = throwError(() => 'Error!').pipe(
    //   retry(3),
    //   catchError(err => of(`Caught: ${err}`))
    // );
    // source$.subscribe({
    //   next: value => console.log('Next:', value),
    //   error: err => console.error('Error:', err),
    //   complete: () => console.log('Completed')
    // });

    // 15
    // const source$ = throwError(() => 'Error!').pipe(
    //   retryWhen(errors => errors.pipe(
    //     // Retry after 1 second
    //     delayWhen(() => timer(1000))
    //   )),
    //   catchError(err => of(`Caught: ${err}`))
    // );
    // source$.subscribe({
    //   next: value => console.log('Next:', value),
    //   error: err => console.error('Error:', err),
    //   complete: () => console.log('Completed')
    // });


    // 16
    // const source$ = of(1, 2, 3).pipe(
    //   tap(value => console.log('Side effect:', value))
    // );
    // source$.subscribe(value => console.log('Received:', value));


    // 17
    // const source$ = of('Delayed Value').pipe(
    //   delay(2000) // Delay emission by 2 seconds
    // );
    // source$.subscribe(value => console.log(value));


    //18
    // const source$ = of('Value').pipe(
    //   timeout(1000) // Timeout if value not emitted within 1 second
    // );
    // source$.subscribe({
    //   next: value => console.log(value),
    //   error: err => console.error('Error:', err)
    // });

    // 19
    // const subject = new Subject<number>();
    // subject.subscribe(value => console.log('Observer 1:', value));
    // subject.next(1);
    // subject.next(2);
    // subject.subscribe(value => console.log('Observer 2:', value));
    // subject.next(3);

    //20
    // const behaviorSubject = new BehaviorSubject<number>(0);
    // behaviorSubject.subscribe(value => console.log('Observer 1:', value));
    // behaviorSubject.next(1);
    // behaviorSubject.next(2);
    // behaviorSubject.subscribe(value => console.log('Observer 2:', value));
    // behaviorSubject.next(3);

    // 21
    // const replaySubject = new ReplaySubject<number>(2);
    // replaySubject.next(1);
    // replaySubject.next(2);
    // replaySubject.next(3);
    // replaySubject.subscribe(value => console.log('Observer 1:', value));
    // replaySubject.next(4);

    // 22
    // const asyncSubject = new AsyncSubject<number>();
    // asyncSubject.subscribe(value => console.log('Observer 1:', value));
    // asyncSubject.next(1);
    // asyncSubject.next(2);
    // asyncSubject.next(3);
    // asyncSubject.subscribe(value => console.log('Observer 2:', value));
    // asyncSubject.next(4);
    // asyncSubject.complete();

    // 23
    // const source$ = interval(1000).pipe(
    //   take(7),
    //   shareReplay(2)
    // );
    // const subscriber1 = source$.subscribe(value => console.log(`Subscriber 1: ${value}`));
    // setTimeout(() => {
    //   const subscriber2 = source$.subscribe(value => console.log(`Subscriber 2: ${value}`));
    // }, 5000);




  }

  // 5
  // ngOnDestroy() {
  //   this.destroy$.next();
  //   this.destroy$.complete();
  // }


}
