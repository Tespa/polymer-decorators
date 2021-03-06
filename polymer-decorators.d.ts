// DO NOT EDIT
// This file is automatically generated by `npm run build`.

declare namespace Polymer {
  namespace decorators {
    /**
     * @license
     * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
     * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
     * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
     * Google as part of the polymer project is also subject to an additional IP
     * rights grant found at http://polymer.github.io/PATENTS.txt
     */
    interface ElementConstructor extends Function {
        is?: string;
        properties?: {
            [prop: string]: PropertyOptions;
        };
        observers?: string[];
        _addDeclarativeEventListener?: (target: string | EventTarget, eventName: string, handler: (ev: Event) => void) => void;
    }
    interface ElementPrototype extends Polymer.Element {
        constructor: ElementConstructor;
    }
    /**
     * A TypeScript class decorator factory that registers the class as a custom
     * element.
     *
     * If `tagname` is provided, it will be used as the custom element name, and
     * will be assigned to the class static `is` property. If `tagname` is omitted,
     * the static `is` property of the class will be used instead. If neither exist,
     * or if both exist but have different values (except in the case that the `is`
     * property is not an own-property of the class), an exception is thrown.
     */
    function customElement(tagname?: string): (class_: (new () => Polymer.Element) & ElementConstructor) => void;
    /**
     * Options for the @property decorator.
     * See https://www.polymer-project.org/2.0/docs/devguide/properties.
     */
    interface PropertyOptions {
        /**
         * This field can be omitted if the Metadata Reflection API is configured.
         */
        type?: BooleanConstructor | DateConstructor | NumberConstructor | StringConstructor | ArrayConstructor | ObjectConstructor;
        notify?: boolean;
        reflectToAttribute?: boolean;
        readOnly?: boolean;
        computed?: string;
        observer?: string | ((val: {}, old: {}) => void);
    }
    /**
     * A TypeScript property decorator factory that defines this as a Polymer
     * property.
     *
     * This function must be invoked to return a decorator.
     *
     * @ExportDecoratedItems
     */
    function property(options?: PropertyOptions): (proto: ElementPrototype, propName: string) => void;
    /**
     * A TypeScript property decorator factory that causes the decorated method to
     * be called when a property changes.
     *
     * This function must be invoked to return a decorator.
     *
     * @ExportDecoratedItems
     */
    function observe(...targets: string[]): (proto: ElementPrototype, propName: string) => void;
    /**
     * A TypeScript accessor decorator factory that causes the decorated getter to
     * be called when a set of dependencies change. The arguments of this decorator
     * should be paths of the data dependencies as described
     * [here](https://www.polymer-project.org/2.0/docs/devguide/observers#define-a-computed-property)
     * The decorated getter should not have an associated setter.
     *
     * This function must be invoked to return a decorator.
     *
     * @ExportDecoratedItems
     */
    function computed<P extends string, El extends ElementPrototype & {
        [K in P]: {} | null | undefined;
    }>(firstTarget: P, ...moreTargets: P[]): (proto: El, propName: string, descriptor: PropertyDescriptor) => void;
    /**
     * A TypeScript property decorator factory that converts a class property into
     * a getter that executes a querySelector on the element's shadow root.
     *
     * By annotating the property with the correct type, elements can have
     * type-checked access to internal elements.
     *
     * This function must be invoked to return a decorator.
     */
    const query: (selector: string) => (proto: ElementPrototype, propName: string) => void;
    /**
     * A TypeScript property decorator factory that converts a class property into
     * a getter that executes a querySelectorAll on the element's shadow root.
     *
     * By annotating the property with the correct type, elements can have
     * type-checked access to internal elements. The type should be NodeList
     * with the correct type argument.
     *
     * This function must be invoked to return a decorator.
     */
    const queryAll: (selector: string) => (proto: ElementPrototype, propName: string) => void;
    type HasEventListener<P extends string> = {
        [K in P]: (e: Event) => void;
    };
    /**
     * A TypeScript property decorator factory that causes the decorated method to
     * be called when a imperative event is fired on the targeted element. `target`
     * can be either a single element by id or element.
     *
     * You must apply the supplied DeclarativeEventListeners mixin to your element
     * class for this decorator to function.
     *
     * https://www.polymer-project.org/2.0/docs/devguide/events#imperative-listeners
     *
     * @param eventName A string representing the event type to listen for
     * @param target A single element by id or EventTarget to target
     *
     * @ExportDecoratedItems
     */
    function listen(eventName: string, target: string | EventTarget): <P extends string, El extends ElementPrototype & HasEventListener<P>>(proto: El, methodName: P) => void;
    
  }
}
