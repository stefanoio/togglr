/*!
 * togglr
 *
 * Stefano Peloso - https://github.com/stefanoio/togglr
 *
 * Free to use under terms of WTFPL version 2 license
 */

(function(ATTRIBUTE_NAMESPACE, DEFAULT_CLASS) {
	"use strict";

	var
		SELECTOR = ATTRIBUTE_NAMESPACE + "target",

		DEFAULT_MODE = "toggle",

		MODES = {
			toggle: function(el) {
				el.classList.toggle(theClass);
			},
			add: function(el) {
				el.classList.add(theClass);
			},
			remove: function(el) {
				el.classList.remove(theClass);
			},
			exclusive: function(el) {
				MODES.toggle(el);
				_REMOVE_FROM_SIBLINGS(el);
			},
			exclusiveAdd: function(el) {
				MODES.add(el);
				_REMOVE_FROM_SIBLINGS(el);
			}
		},

		_REMOVE_FROM_SIBLINGS = function(el) { // Utility function for exclusive modes
			Array.prototype.forEach.call(el.parentNode.children, function(el2) {
				if(el !== el2) {
					el2.classList.remove(theClass);
				}
			});
		},

		theClass,

		click = function(e) {
			var
				selector = e.target.getAttribute(SELECTOR),
				theFunction = MODES[DEFAULT_MODE],
				tmpClass,
				attr;
			if(selector) {
				e.preventDefault();
				theClass = DEFAULT_CLASS;
				for(attr in MODES) {
					if(MODES.hasOwnProperty(attr)) {
						tmpClass = e.target.getAttribute(ATTRIBUTE_NAMESPACE + attr);
						if(tmpClass) {
							theClass = tmpClass;
							theFunction = MODES[attr];
							break;
						}
					}
				}
				Array.prototype.forEach.call(document.querySelectorAll(selector), theFunction);
			}
		},

		ready = function() {
			document.documentElement.classList.add("togglr");
			document.body.addEventListener("click", click, true);
		},

		init = function() {
			if("classList" in document.body) {
				if(document.readyState === "loading") {
					document.addEventListener("DOMContentLoaded", ready);
				} else {
					ready();
				}
			} else {
				console.error("togglr: unsupported browser");
			}
		};

	init();

})(
// Configuration
	/* ATTRIBUTE_NAMESPACE: */ "data-togglr-",
	/* DEFAULT_CLASS: */ "isActive"
);
