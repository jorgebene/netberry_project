/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Heroe } from '../models/heroe';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getHeroes
   */
  static readonly GetHeroesPath = '/heroes';

  /**
   * Retorna una lista de heroes.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getHeroes()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHeroes$Response(params?: {

    /**
     * Filtra los heroes que contienen el valor proporcionado en su nombre.
     */
    nombre?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Heroe>>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.GetHeroesPath, 'get');
    if (params) {
      rb.query('nombre', params.nombre, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Heroe>>;
      })
    );
  }

  /**
   * Retorna una lista de heroes.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getHeroes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHeroes(params?: {

    /**
     * Filtra los heroes que contienen el valor proporcionado en su nombre.
     */
    nombre?: string;
    context?: HttpContext
  }
): Observable<Array<Heroe>> {

    return this.getHeroes$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Heroe>>) => r.body as Array<Heroe>)
    );
  }

  /**
   * Path part for operation heroesPost
   */
  static readonly HeroesPostPath = '/heroes';

  /**
   * Añade un nuevo heroe.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `heroesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  heroesPost$Response(params: {
    context?: HttpContext
    body: {

/**
 * El nombre del heroe.
 */
'nombre': string;

/**
 * El alias del heroe.
 */
'alias': string;

/**
 * Las habilidades del heroe.
 */
'habilidades': string;
}
  }
): Observable<StrictHttpResponse<{

/**
 * El id único asignado al heroe creado.
 */
'id'?: number;
'nombre'?: string;
'alias'?: string;
'habilidades'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.HeroesPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * El id único asignado al heroe creado.
         */
        'id'?: number;
        'nombre'?: string;
        'alias'?: string;
        'habilidades'?: string;
        }>;
      })
    );
  }

  /**
   * Añade un nuevo heroe.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `heroesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  heroesPost(params: {
    context?: HttpContext
    body: {

/**
 * El nombre del heroe.
 */
'nombre': string;

/**
 * El alias del heroe.
 */
'alias': string;

/**
 * Las habilidades del heroe.
 */
'habilidades': string;
}
  }
): Observable<{

/**
 * El id único asignado al heroe creado.
 */
'id'?: number;
'nombre'?: string;
'alias'?: string;
'habilidades'?: string;
}> {

    return this.heroesPost$Response(params).pipe(
      map((r: StrictHttpResponse<{

/**
 * El id único asignado al heroe creado.
 */
'id'?: number;
'nombre'?: string;
'alias'?: string;
'habilidades'?: string;
}>) => r.body as {

/**
 * El id único asignado al heroe creado.
 */
'id'?: number;
'nombre'?: string;
'alias'?: string;
'habilidades'?: string;
})
    );
  }

  /**
   * Path part for operation heroesIdGet
   */
  static readonly HeroesIdGetPath = '/heroes/{id}';

  /**
   * Obtiene los detalles de un heroe en específico por su id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `heroesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  heroesIdGet$Response(params: {

    /**
     * El id del heroe a obtener.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Heroe>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.HeroesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Heroe>;
      })
    );
  }

  /**
   * Obtiene los detalles de un heroe en específico por su id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `heroesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  heroesIdGet(params: {

    /**
     * El id del heroe a obtener.
     */
    id: number;
    context?: HttpContext
  }
): Observable<Heroe> {

    return this.heroesIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Heroe>) => r.body as Heroe)
    );
  }

  /**
   * Path part for operation heroesIdPut
   */
  static readonly HeroesIdPutPath = '/heroes/{id}';

  /**
   * Actualiza un heroe existente.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `heroesIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  heroesIdPut$Response(params: {

    /**
     * El id del heroe a actualizar.
     */
    id: number;
    context?: HttpContext
    body: {

/**
 * El nombre del heroe.
 */
'nombre'?: string;

/**
 * El alias del heroe.
 */
'alias'?: string;

/**
 * Las habilidades del heroe.
 */
'habilidades'?: string;
}
  }
): Observable<StrictHttpResponse<{
'id'?: number;
'nombre'?: string;
'alias'?: string;
'habilidades'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.HeroesIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'id'?: number;
        'nombre'?: string;
        'alias'?: string;
        'habilidades'?: string;
        }>;
      })
    );
  }

  /**
   * Actualiza un heroe existente.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `heroesIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  heroesIdPut(params: {

    /**
     * El id del heroe a actualizar.
     */
    id: number;
    context?: HttpContext
    body: {

/**
 * El nombre del heroe.
 */
'nombre'?: string;

/**
 * El alias del heroe.
 */
'alias'?: string;

/**
 * Las habilidades del heroe.
 */
'habilidades'?: string;
}
  }
): Observable<{
'id'?: number;
'nombre'?: string;
'alias'?: string;
'habilidades'?: string;
}> {

    return this.heroesIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<{
'id'?: number;
'nombre'?: string;
'alias'?: string;
'habilidades'?: string;
}>) => r.body as {
'id'?: number;
'nombre'?: string;
'alias'?: string;
'habilidades'?: string;
})
    );
  }

  /**
   * Path part for operation heroesIdDelete
   */
  static readonly HeroesIdDeletePath = '/heroes/{id}';

  /**
   * Elimina un heroe.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `heroesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  heroesIdDelete$Response(params: {

    /**
     * El id del heroe a eliminar.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.HeroesIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Elimina un heroe.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `heroesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  heroesIdDelete(params: {

    /**
     * El id del heroe a eliminar.
     */
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.heroesIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
