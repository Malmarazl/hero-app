import { SpinnerService } from './../../../services/spinner.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable } from "rxjs";

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
    constructor(private _spinnerService: SpinnerService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this._spinnerService.showSpinner();
        return next.handle(req).pipe(
            finalize(() => this._spinnerService.hideSpinner())
        )
    }
}