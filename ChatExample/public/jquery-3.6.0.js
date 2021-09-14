/*!
 * jQuery 자바스크립트 라이브러리 v3.6.0
 * https://jquery.com/
 *
 * Sizzle.js 포함
 * https://sizzlejs.com/
 *
 * 저작권 OpenJS 재단 및 기타 기고자
 * MIT 라이선스 하에 출시
 * https://jquery.org/license
 *
 * 날짜: 2021-03-02T17:08Z
 */
(함수(전역, 공장) {

    "엄격한 사용";

    if (typeof 모듈 === "객체" && typeof module.exports === "객체") {

        // 적절한 `window`가 있는 CommonJS 및 CommonJS와 유사한 환경의 경우
        // 존재하면 팩토리를 실행하고 jQuery를 가져옵니다.
        // `문서`가 있는 `창`이 없는 환경의 경우
        // (Node.js와 같은) 팩토리를 module.exports로 노출합니다.
        // 이것은 실제 '창' 생성의 필요성을 강조합니다.
        // 예를 들어 var jQuery = require("jquery")(window);
        // 자세한 내용은 티켓 #14549를 참조하세요.
        module.exports = global.document ?
            팩토리(글로벌, true) :
            함수(w) {
            if (!w.document) {
                throw new Error("jQuery에는 문서가 있는 창이 필요합니다.");
            }
				반환 공장(w);
        };
    } 또 다른 {
        공장(글로벌);
    }

    // 윈도우가 아직 정의되지 않은 경우 전달
} ) (typeof window !== "undefined" ? window : this, function (window, noGlobal) {

    // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
    // 엄격하지 않은 코드(예: ASP.NET 4.5)가 엄격 모드에 액세스할 때 예외를 던집니다.
    // arguments.callee.caller(trac-13335). 그러나 jQuery 3.0(2016)부터는 엄격 모드가 일반적이어야 합니다.
    // 그러한 모든 시도가 try 블록에서 보호되기에 충분합니다.
    "엄격한 사용";

    var arr = [];

    var getProto = Object.getPrototypeOf;

    var 슬라이스 = arr.slice;

    var 플랫 = arr.flat ? 함수(배열) {
        반환 arr.flat.call(배열);
} : 함수(배열) {
	반환 arr.concat.apply([], 배열);
};


var 푸시 = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call(객체);

var 지원 = {};

var isFunction = 기능 isFunction(obj) {

    // 지원: 크롬 <=57, 파이어폭스 <=52
    // 일부 브라우저에서 typeof는 HTML <object> 요소에 대해 "function"을 반환합니다.
    // (즉, `typeof document.createElement( "object" ) === "function"`).
    // *모든* DOM 노드를 함수로 분류하고 싶지 않습니다.
    // 지원: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf 도구 <=0.12.5
    // 이전 WebKit의 경우 typeof는 HTML 컬렉션에 대해 "함수"를 반환합니다.
    // (예: `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
    return typeof obj === "function" && typeof obj.nodeType !== "숫자" &&
        typeof obj.item !== "함수";
};


var isWindow = 기능 isWindow(obj) {
		obj 반환 != null && obj === obj.window;
};


var 문서 = window.document;



var 보존 스크립트 속성 = {
    유형: 사실,
    src: 사실,
    논스: 사실,
    noModule: 참
};

	함수 DOMEval(코드, 노드, 문서) {
    문서 = 문서 || 문서;

    var 나는, 발,
        스크립트 = doc.createElement("스크립트");

    script.text = 코드;
    if (노드) {
        for (i in reservedScriptAttributes) {

            // 지원: 파이어폭스 64+, 엣지 18+
            // 일부 브라우저는 스크립트에서 "nonce" 속성을 지원하지 않습니다.
            // 반면에 `getAttribute`를 사용하는 것만으로는 충분하지 않습니다.
            // `nonce` 속성은 빈 문자열로 재설정됩니다.
            // 브라우징 컨텍스트가 연결됩니다.
            // https://github.com/whatwg/html/issues/2369 참조
            // https://html.spec.whatwg.org/#nonce-attributes 참조
            // `node.getAttribute` 검사가 다음을 위해 추가되었습니다.
            // `jQuery.globalEval`을 사용하여 비포함 노드를 가짜로 만들 수 있습니다.
            // 객체를 통해.
            발 = 노드[나는] || node.getAttribute && node.getAttribute(i);
            if (발) {
                script.setAttribute(i, val);
            }
        }
    }
    doc.head.appendChild(스크립트).parentNode.removeChild(스크립트);
}


함수 toType(obj) {
    if (obj == null) {
		반환 객체 + "";
    }

	// 지원: Android <=2.3 전용(기능 RegExp)
	반환 typeof obj === "객체" || typeof obj === "함수" ?
        class2type[toString.call(obj)] || "물체" :
        객체 유형;
}
/* 전역 기호 */
// .eslintrc.json에서 이 전역을 정의하면 전역을 사용할 위험이 있습니다.
// 다른 곳에서 보호되지 않으므로 이 모듈에 대해서만 전역을 정의하는 것이 더 안전해 보입니다.



var
    버전 = "3.6.0",

    // jQuery의 로컬 복사본 정의
    jQuery = 기능(선택기, 컨텍스트) {

        // jQuery 객체는 실제로 '향상된' 초기화 생성자일 뿐입니다.
        // jQuery가 호출되면 초기화 필요(포함되지 않은 경우 오류가 발생하도록 허용)
        새로운 jQuery.fn.init(선택자, 컨텍스트)를 반환합니다.
	};

jQuery.fn = jQuery.prototype = {

    // 현재 사용 중인 jQuery 버전
    제이쿼리: 버전,

    생성자: jQuery,

    // jQuery 객체의 기본 길이는 0입니다.
    길이: 0,

    toArray: 함수() {
		반환 slice.call(this);
},

// 일치하는 요소 집합에서 N번째 요소 가져오기 또는
// 일치하는 전체 요소 세트를 깨끗한 배열로 가져옵니다.
가져오기: 함수(숫자) {

    // 깨끗한 배열의 모든 요소를 ​​반환
    if (숫자 == null) {
			반환 slice.call(this);
    }

		// 집합에서 하나의 요소만 반환
		반환 숫자 < 0 ? this[숫자 + this.length] : this[숫자];
},

	// 요소 배열을 가져와 스택에 푸시합니다.
	// (새로 일치하는 요소 집합을 반환)
	푸시 스택: 기능(요소) {

    // 새로운 jQuery 일치 요소 세트를 빌드합니다.
    var ret = jQuery.merge(this.constructor(), 요소);

    // 이전 객체를 스택에 추가(참조로)
    ret.prevObject = 이것;

		// 새로 형성된 요소 집합을 반환합니다.
		리턴 렛;
},

// 일치하는 세트의 모든 요소에 대해 콜백을 실행합니다.
각각: 함수(콜백) {
    return jQuery.each(this, callback);
},

지도: 함수(콜백) {
    return this.pushStack(jQuery.map(this, function (요소, i) {
        return callback.call(elem, i, elem);
    }));
},

슬라이스: 함수() {
    return this.pushStack(slice.apply(this, arguments));
},

	첫 번째: 함수() {
    this.eq(0)를 반환합니다.
	},

마지막: 함수() {
    this.eq(-1)를 반환합니다.
	},

짝수: 함수() {
    return this.pushStack(jQuery.grep(this, function (_elem, i) {
        반환(i + 1) % 2;
    }));
},

홀수: 함수() {
    return this.pushStack(jQuery.grep(this, function (_elem, i) {
			반환 i % 2;
    }));
},

eq: 함수(나는) {
    var len = this.length,
        j = +i + (i < 0 ? len : 0);
    return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
},

끝: 함수() {
    this.prevObject를 반환 || this.constructor();
},

	// 내부 전용입니다.
	// jQuery 메서드가 아닌 Array의 메서드처럼 동작합니다.
	밀어 밀어,
    정렬: arr.sort,
        스플라이스: arr.splice
};

jQuery.extend = jQuery.fn.extend = function () {
    var 옵션, 이름, src, 복사, copyIsArray, 복제,
        대상 = 인수[0] || {},
        나는 = 1,
        길이 = 인수.길이,
        깊은 = 거짓;

    // 깊은 복사 상황 처리
    if (타겟 유형 === "부울" ) {
        깊은 = 대상;

        // 부울과 대상을 건너뜁니다.
        대상 = 인수[i] || {};
        나는++;
    }

    // 대상이 문자열 또는 무언가인 경우 처리(딥 카피에서 가능)
    if (typeof target !== "object" && !isFunction(target)) {
        대상 = {};
    }

    // 하나의 인수만 전달되면 jQuery 자체 확장
    if (나는 === 길이) {
        대상 = 이것;
        NS--;
    }

    for (; i < 길이; i++) {

        // null이 아닌/정의되지 않은 값만 처리
        if ((옵션 = 인수[i]) != null) {

            // 기본 객체 확장
            (옵션의 이름 ) {
                복사 = 옵션[이름];

                // Object.prototype 오염 방지
                // 무한 루프 방지
                if (이름 === "__proto__" || 대상 === 복사) {
                    계속하다;
                }

                // 일반 객체 또는 배열을 병합하는 경우 재귀
                if (깊은 && 복사 && (jQuery.isPlainObject(복사) ||
                    (copyIsArray = Array.isArray(복사)))) {
                    src = 대상[이름];

                    // 소스 값에 대한 적절한 유형을 확인합니다.
                    if (copyIsArray && !Array.isArray(src)) {
                        클론 = [];
                    } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                        클론 = {};
                    } 또 다른 {
                        클론 = src;
                    }
                    copyIsArray = 거짓;

                    // 원본 개체를 이동하지 말고 복제합니다.
                    target[이름] = jQuery.extend(깊이, 복제, 복사);

                    // 정의되지 않은 값을 가져오지 않음
                } else if (복사 !== 정의되지 않음 ) {
                    대상[이름] = 복사;
                }
            }
        }
    }

	// 수정된 객체를 반환
	반환 대상;
};

jQuery.extend({

    // 페이지의 jQuery 사본마다 고유
    확장: "jQuery" + (버전 + Math.random()).replace(/\D/g, ""),

    // 준비된 모듈 없이 jQuery가 준비되었다고 가정합니다.
    isReady: 사실,

    오류: 함수(메시지) {
    새로운 오류 발생(msg);
},

    noop: 함수() {},

    isPlainObject: 함수(obj) {
        var 프로토, Ctor;

        // 명백한 부정 감지
        // jQuery.type 대신 toString을 사용하여 호스트 객체를 포착합니다.
        if( !obj || toString.call(obj) !== "[객체 객체]") {
			거짓을 반환합니다.
		}

프로토 = getProto(obj);

// 프로토타입이 없는 객체(예: `Object.create( null )`)는 일반 객체입니다.
만약(!프로토) {
			true를 반환합니다.
		}

// 프로토타입이 있는 객체는 전역 객체 함수에 의해 생성된 경우 일반 객체입니다.
Ctor = hasOwn.call(proto, "생성자") && proto.constructor;
		반환 typeof Ctor === "함수" && fnToString.call(Ctor) === ObjectFunctionString;
	},

isEmptyObject: 함수(obj) {
		변수 이름;

    (obj 의 이름 ) {
			거짓을 반환합니다.
		}
		true를 반환합니다.
	},

// 제공된 컨텍스트에서 스크립트를 평가합니다. 다시 글로벌로 떨어진다
// 지정하지 않은 경우.
globalEval: 함수(코드, 옵션, 문서) {
    DOMEval(code, { nonce: options && options.nonce }, doc);
},

각각: function(obj, 콜백) {
    var 길이, i = 0;

    if (isArrayLike(obj)) {
        길이 = obj.length;
        for (; i < 길이; i++) {
            if (callback.call(obj[i], i, obj[i]) === false) {
                부서지다;
            }
        }
    } 또 다른 {
        (obj 의 i ) {
            if (callback.call(obj[i], i, obj[i]) === false) {
                부서지다;
            }
        }
    }

		객체 반환;
},

// 결과는 내부용입니다.
makeArray: 함수(arr, 결과) {
    var ret = 결과 || [];

    if (arr != null) {
        if (isArrayLike(객체(arr))) {
            jQuery.merge(ret,
                typeof arr === "문자열" ?
                    [아] : 아
            );
        } 또 다른 {
            push.call(ret, arr);
        }
    }

		리턴 렛;
},

inArray: function(요소, arr, i) {
		반환 arr == null ? -1 : indexOf.call(arr, elem, i);
},

// 지원: Android <=4.0 전용, PhantomJS 1 전용
// push.apply(_, arraylike)는 고대 WebKit에서 발생합니다.
병합: 함수(첫 번째, 두 번째) {
    var len = +초.길이,
        j = 0,
        나는 = 첫 번째.길이;

    ( ; j < len; j++ ) {
			첫 번째[i++] = 두 번째[j];
    }

		첫 번째.길이 = 나;

		먼저 반환;
},

grep: 함수(요소, 콜백, 반전) {
    var 콜백인버스,
        일치 = [],
        나는 = 0,
        길이 = elems.length,
        콜백 기대 = !반전;

    // 배열을 탐색하고 항목만 저장합니다.
    // 유효성 검사기 함수를 전달합니다.
    for (; i < 길이; i++) {
        callbackInverse = !callback(elems[i], i);
        if (callbackInverse !== callbackExpect) {
            match.push(elems[i]);
        }
    }

		반환 일치;
},

// arg는 내부 사용 전용입니다.
지도: 기능(요소, 콜백, 인수) {
		변수 길이, 값,
        나는 = 0,
        렛 = [];

    // 배열을 살펴보고 각 항목을 새 값으로 변환합니다.
    if (isArrayLike(요소)) {
        길이 = elems.length;
        for (; i < 길이; i++) {
            값 = 콜백(elems[i], i, arg);

            if (값 != null) {
                ret.push(값);
            }
        }

        // 객체의 모든 키를 살펴보고,
    } 또 다른 {
        (요소의 i) {
            값 = 콜백(elems[i], i, arg);

            if (값 != null) {
                ret.push(값);
            }
        }
    }

		// 중첩된 배열을 평평하게 합니다.
		리턴 플랫(ret);
},

// 객체에 대한 전역 GUID 카운터
가이드: 1,

    // jQuery.support는 Core에서 사용되지 않지만 다른 프로젝트는
    // 속성이 있으므로 존재해야 합니다.
    지원: 지원
} );

if (기호 유형 === "함수" ) {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
}

// class2type 맵 채우기
jQuery.each("부울 숫자 문자열 함수 배열 날짜 RegExp 개체 오류 기호".split(" "),
    함수(_i, 이름) {
    class2type["[객체 " + 이름 + "]"] = name.toLowerCase();
});

함수 isArrayLike(obj) {

    // 지원: 실제 iOS 8.2 전용(시뮬레이터에서 재현 불가)
    // JIT 오류를 방지하기 위해 사용되는 `in` 검사(gh-2145)
    // 거짓 부정으로 인해 hasOwn은 여기에서 사용되지 않습니다.
    // IE의 Nodelist 길이 관련
    var 길이 = !!obj && obj && obj.length의 "길이",
        유형 = toType(obj);

    if (isFunction(obj) || isWindow(obj)) {
		거짓을 반환합니다.
	}

	반환 유형 === "배열" || 길이 === 0 ||
        typeof 길이 === "숫자" && 길이 > 0 && (길이 - 1) in obj;
}
var 시즐 =
    /*!
     * 지글지글 CSS 선택기 엔진 v2.3.6
     * https://sizzlejs.com/
     *
     * 저작권 JS 재단 및 기타 기고자
     * MIT 라이선스 하에 출시
     * https://js.foundation/
     *
     * 날짜: 2021-02-16
     */
    (함수(창) {
        var 나는,
        지원하다,
        특급,
        텍스트 가져오기,
        isXML,
        토큰화하다,
        엮다,
        선택하다,
        가장 바깥쪽 컨텍스트,
        정렬 입력,
        중복,

        // 로컬 문서 변수
        세트 문서,
        문서,
        문서엘렘,
        문서는HTML,
        rbuggyQSA,
        rbuggyMatches,
        성냥,
        포함,

        // 인스턴스별 데이터
        expando = "sizzle" + 1 * new Date(),
        선호 문서 = 창.문서,
        디런 = 0,
        완료 = 0,
        클래스 캐시 = createCache(),
        토큰캐시 = createCache(),
        컴파일러 캐시 = createCache(),
        nonnativeSelectorCache = createCache(),
        정렬 순서 = 함수(a, b) {
            if (a === b) {
    hasDuplicate = 참;
}
		반환 0;
	},

// 인스턴스 메소드
hasOwn = ({}).hasOwnProperty,
    ar = [],
    팝 = arr.pop,
    pushNative = arr.push,
    푸시 = arr.push,
    슬라이스 = arr.slice,

    // 네이티브보다 빠르기 때문에 제거된 indexOf를 사용합니다.
    // https://jsperf.com/thor-indexof-vs-for/5
    indexOf = 함수(목록, 요소) {
		변수 i = 0,
        len = 목록.길이;
    ( ; 나는 < len; 나는++ ) {
        if (list[i] === 요소) {
				반환 나;
        }
    }
    반환 - 1;
},

부울 = "선택|선택|비동기|자동초점|자동재생|제어|지연|비활성화|숨김|" +
    "ismap|loop|multiple|open|readonly|required|scoped",

    // 정규 표현식

    // http://www.w3.org/TR/css3-selectors/#whitespace
    공백 = "[\\x20\\t\\r\\n\\f]",

    // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
    식별자 = "(?:\\\\[\\da-fA-F]{1,6}" + 공백 +
    "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

    // 속성 선택기: http://www.w3.org/TR/selectors/#attribute-selectors
    속성 = "\\[" + 공백 + "*(" + 식별자 + ")(?:" + 공백 +

    // 연산자(캡처 2)
    "*([*^$|!~]?=)" + 공백 +

    // "속성 값은 CSS 식별자여야 합니다. [캡처 5]
    // 또는 문자열 [캡처 3 또는 캡처 4]"
    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\"] )*) \"|(" + 식별자 + "))|)" +
        공백 + "*\\]",

        의사 = ":(" + 식별자 + ")(?:\\((" +

        // preFilter에서 토큰화해야 하는 선택기의 수를 줄이려면 인수를 선호합니다.
        // 1. 인용(캡처 3; 캡처 4 또는 캡처 5)
        "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\"])*) \")|" +

            // 2. 단순(캡처 6)
            "((?:\\\\.|[^\\\\()[\\]]|" + 속성 + ")*)|" +

            // 3. 다른 모든 것(캡처 2)
            ".*" +
            ")\\)|)",

            // 선행 및 이스케이프 처리되지 않은 후행 공백, 후자 앞에 오는 공백이 아닌 일부 문자 캡처
            rwhitespace = 새로운 RegExp(공백 + "+", "g"),
                rtrim = 새로운 RegExp("^" + 공백 + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
                    공백 + "+$", "g"),

                    rcomma = 새로운 RegExp("^" + 공백 + "*," + 공백 + "*"),
                        rcombinators = new RegExp("^" + 공백 + "*([>+~]|" + 공백 + ")" + 공백 +
                            "*"),
                        rdescend = 새로운 정규 표현식(공백 + "|>"),

                            rpseudo = 새로운 RegExp(의사),
                                식별자 = 새로운 RegExp("^" + 식별자 + "$"),

                                    matchExpr = {
                                        "ID": 새로운 RegExp( "^#(" + 식별자 + ")" ),
"클래스": 새로운 정규 표현식("^\\.(" + 식별자 + ")"),
    "TAG": 새로운 RegExp("^(" + 식별자 + "|[*])"),
        "ATTR": 새로운 RegExp("^" + 속성),
            "의사": 새로운 RegExp("^" + 의사),
                "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    공백 + "*(짝수|홀수|(([+-]|)(\\d*)n|)" + 공백 + "*(?:([+-]|)" +
                    공백 + "*(\\d+)|))" + 공백 + "*\\)|)", "i"),
                    "bool": 새로운 RegExp("^(?:" + 부울 + ")$", "i"),

                        // .is()를 구현하는 라이브러리에서 사용
                        // `select`에서 POS 일치를 위해 이것을 사용합니다.
                        "needsContext": 새로운 RegExp("^" + 공백 +
                            "*[>+~]|:(짝수|홀수|eq|gt|lt|n번째|첫번째|마지막)(?:\\(" + 공백 +
                            "*((?:-\\d)?\\d*)" + 공백 + "*\\)|)(?=[^-]|$)", "i")
	},

rhtml = /HTML$/i,
    rinputs = /^(?:입력|선택|텍스트영역|버튼)$/i,
    rheader = /^h\d$/i,

    기본 = /^[^{]+\{\s*\[기본 \w/,

    // 쉽게 구문 분석/검색 가능한 ID 또는 TAG 또는 CLASS 선택기
    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

    형제 = /[+~]/,

    // CSS 이스케이프
    // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
    runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + 공백 + "?|\\\\([^\\r\\n\\f])", "NS"),
    funescape = function (탈출, nonHex) {
        var high = "0x" + escape.slice(1) - 0x10000;

        16진수가 아닌 반환 ?

            // 16진수가 아닌 이스케이프 시퀀스에서 백슬래시 접두사를 제거합니다.
            16진수가 아닌:

        // 16진수 이스케이프 시퀀스를 인코딩된 유니코드 코드 포인트로 바꿉니다.
        // 지원: IE <=11+
        // BMP(Basic Multilingual Plane) 외부 값의 경우 수동으로 구성
        // 대리 쌍
        높은 < 0 ?
            String.fromCharCode(high + 0x10000) :
            String.fromCharCode(높음 >> 10 | 0xD800, 높음 & 0x3FF | 0xDC00);
    },

    // CSS 문자열/식별자 직렬화
    // https://drafts.csswg.org/cssom/#common-serializing-idioms
    rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
    fcssescape = 기능(채널, asCodePoint) {
    if (asCodePoint) {

        // U+0000 NULL은 U+FFFD REPLACEMENT CHARACTER가 됩니다.
        if (채널 === "\0") {
				반환 "\uFFFD";
        }

			// 제어 문자와 (위치에 따라 다름) 숫자는 코드 포인트로 이스케이프됩니다.
			반환 ch.slice(0, -1) + "\\" +
            ch.charCodeAt(ch.length - 1).toString(16) + " ";
    }

		// 다른 잠재적으로 특수할 수 있는 ASCII 문자는 백슬래시로 이스케이프됩니다.
		반환 "\\" + ch;
},

	// iframe에 사용
	// setDocument() 참조
	// 함수 래퍼를 제거하면 "권한 거부됨"이 발생합니다.
	// IE의 오류
	언로드 핸들러 = 함수() {
    세트문서();
},

inDisabledFieldset = addCombinator(
    기능(요소) {
    return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
},
    { 디렉토리: "parentNode", 다음: "legend" }
);

// push.apply( _, NodeList ) 최적화
노력하다 {
    푸시.적용(
        (arr = slice.call(preferredDoc.childNodes)),
        preferredDoc.childNodes
    );

    // 지원: 안드로이드<4.0
    // 자동으로 실패하는 push.apply 감지
    // eslint-disable-next-line no-unused-expressions
    arr[preferredDoc.childNodes.length].nodeType;
} 잡기(e) {
    푸시 = {
        적용: arr.length ?

            // 가능하면 슬라이스 활용
            함수(타겟, 엘스) {
        pushNative.apply(target, slice.call(els));
    } :

    // 지원: IE<9
    // 그렇지 않으면 직접 추가
    함수(타겟, 엘스) {
        var j = target.length,
            나는 = 0;

        // NodeList.length를 신뢰할 수 없음
        동안((타겟[j++] = els[i++])) { }
        target.length = j - 1;
    }
};
}

function Sizzle(선택기, 컨텍스트, 결과, 시드) {
    var m, i, elem, nid, match, groups, newSelector,
        newContext = 컨텍스트 && 컨텍스트.소유자 문서,

        // 컨텍스트가 문서로 기본 설정되므로 nodeType은 기본적으로 9로 설정됩니다.
        노드 유형 = 컨텍스트 ? 컨텍스트.노드 유형: 9;

    결과 = 결과 || [];

    // 유효하지 않은 선택기 또는 컨텍스트가 있는 호출에서 일찍 반환
    if (typeof 선택기 !== "문자열" || !선택기 ||
        노드 유형 !== 1 && 노드 유형 !== 9 && 노드 유형 !== 11 ) {

		반환 결과;
    }

    // HTML 문서에서 (필터와 반대되는) 찾기 작업을 단축키로 시도합니다.
    만약(!씨) {
        setDocument(컨텍스트);
        컨텍스트 = 컨텍스트 || 문서;

        if (문서가 HTML ) {

            // 선택기가 충분히 단순하다면 "get*By*" DOM ​​메소드를 사용해 보십시오.
            // (메소드가 존재하지 않는 DocumentFragment 컨텍스트 제외)
            if (nodeType !== 11 && (일치 = rquickExpr.exec(선택기))) {

                // 아이디 선택자
                if ((m = 일치[1])) {

                    // 문서 컨텍스트
                    if (노드 유형 === 9 ) {
                        if ((요소 = context.getElementById(m))) {

                            // 지원: IE, 오페라, 웹킷
                            // TODO: 버전 식별
                            // getElementById는 ID 대신 이름으로 요소를 일치시킬 수 있습니다.
                            if (요소 ID === m ) {
                                결과.푸시(요소);
								반환 결과;
                            }
                        } 또 다른 {
							반환 결과;
                        }

                        // 요소 컨텍스트
                    } 또 다른 {

                        // 지원: IE, 오페라, 웹킷
                        // TODO: 버전 식별
                        // getElementById는 ID 대신 이름으로 요소를 일치시킬 수 있습니다.
                        if (newContext && (요소 = newContext.getElementById(m)) &&
                            포함(컨텍스트, 요소) &&
                            요소 ID === m ) {

                            결과.푸시(요소);
							반환 결과;
                        }
                    }

                    // 타입 선택자
                } else if (일치[2]) {
                    push.apply(결과, context.getElementsByTagName(선택기));
					반환 결과;

                    // 클래스 선택자
                } else if ((m = match[3]) && support.getElementsByClassName &&
                    context.getElementsByClassName) {

                    push.apply(결과, context.getElementsByClassName(m));
					반환 결과;
                }
            }

            // querySelectorAll 활용
            if (support.qsa &&
                !nonnativeSelectorCache[선택기 + " "] &&
                (!rbuggyQSA || !rbuggyQSA.test(선택기)) &&

                // 지원: IE 8 전용
                // 객체 요소 제외
                (노드 유형 !== 1 || context.nodeName.toLowerCase() !== "객체" ) ) {

                newSelector = 선택기;
                newContext = 컨텍스트;

                // qSA는 자식을 평가할 때 범위 지정 루트 외부의 요소를 고려합니다.
                // 우리가 원하지 않는 자손 결합자.
                // 그러한 경우, 우리는 모든 선택자에 접두사를 붙여 동작을 해결합니다.
                // 범위 컨텍스트를 참조하는 ID 선택기가 있는 목록.
                // 선행 결합자를 사용할 때도 기술을 사용해야 합니다.
                // 그러한 선택자는 querySelectorAll에 의해 인식되지 않습니다.
                // 이 기술에 대해 Andrew Dupont에게 감사드립니다.
                if (노드 유형 === 1 &&
                    (rdescend.test(선택기) || rcombinators.test(선택기)) ) {

                    // 형제 선택자의 컨텍스트 확장
                    newContext = rsibling.test(선택기) && testContext(context.parentNode) ||
                        문맥;

                    // 브라우저가 다음과 같은 경우 ID 해킹 대신 :scope를 사용할 수 있습니다.
                    // 컨텍스트를 변경하지 않는 경우 & 지원합니다.
                    if (newContext !== 컨텍스트 || !support.scope) {

                        // 컨텍스트 ID를 캡처하고 필요한 경우 먼저 설정합니다.
                        if ((id = context.getAttribute("id"))) {
                            nid = nid.replace(rcssescape, fcssescape);
                        } 또 다른 {
                            context.setAttribute("id", (nid = expando));
                        }
                    }

                    // 목록의 모든 선택자 접두사
                    그룹 = 토큰화(선택기);
                    나는 = 그룹.길이;
                    동안(나는--) {
                        그룹[i] = (nid ? "#" + nid : ":scope") + " " +
                            toSelector(그룹[i]);
                    }
                    newSelector = groups.join(",");
                }

				노력하다 {
                    push.apply(결과,
                        newContext.querySelectorAll(newSelector)
                    );
					반환 결과;
                } 잡기(qsaError) {
                    nonnativeSelectorCache(선택기, true);
                } 마지막으로 {
                    if (id === 확장) {
                        context.removeAttribute("아이디");
                    }
                }
            }
        }
    }

    // 다른 모든
    return select(selector.replace(rtrim, "$1"), 컨텍스트, 결과, 시드);
}

/**
 * 제한된 크기의 키-값 캐시 생성
 * @returns {function(string, object)} 객체 데이터를 자체적으로 저장한 후 반환
 * 속성 이름 (공백 접미사) 문자열 및 (캐시가 Expr.cacheLength보다 큰 경우)
 * 가장 오래된 항목 삭제
 */
함수 생성 캐시() {
    var 키 = [];

	함수 캐시(키, 값) {

        // 네이티브 프로토타입 속성과의 충돌을 피하기 위해 (key + " ") 사용(문제 #157 참조)
        if (키.푸시(키 + " ") > Expr.cacheLength) {

			// 가장 최근 항목만 유지
			캐시 삭제[keys.shift()];
        }
        반환(캐시[키 + " "] = 값);
    }
	반환 캐시;
}

/**
 * Sizzle이 특별히 사용하는 기능을 표시
 * @param {Function} fn 표시할 함수
 */
기능 표시 기능(fn) {
    fn[확장] = 참;
	리턴 fn;
}

/**
 * 요소를 사용한 테스트 지원
 * @param {Function} fn 생성된 요소를 전달하고 부울 결과를 반환합니다.
 */
기능 주장(fn) {
    var el = document.createElement("필드셋");

	노력하다 {
        반환!!fn(el);
    } 잡기(e) {
		거짓을 반환합니다.
	} 마지막으로 {

        // 기본적으로 부모에서 제거
        if (el.parentNode) {
            el.parentNode.removeChild(el);
        }

        // IE에서 메모리 해제
        엘 = 널;
    }
}

/**
 * 지정된 모든 속성에 대해 동일한 핸들러를 추가합니다.
 * @param {String} attrs 파이프로 구분된 속성 목록
 * @param {Function} 핸들러 적용할 메소드
 */
기능 addHandle(속성, 핸들러) {
    var arr = attrs.split("|"),
        나는 = arr.길이;

    동안(나는--) {
        Expr.attrHandle[arr[i]] = 핸들러;
    }
}

/**
 * 두 형제의 문서 순서 확인
 * @param {요소}
 * @param {요소} b
 * @returns {Number} a가 b 앞에 있으면 0보다 작은 값을 반환하고 b 뒤에 오면 0보다 큰 값을 반환합니다.
 */
함수 형제 검사(a, b) {
    var cur = b && a,
        diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
            a.sourceIndex - b.sourceIndex;

    // 두 노드 모두에서 사용 가능한 경우 IE sourceIndex 사용
    if (차이) {
		반환 차이;
    }

    // b가 a 뒤에 오는지 확인
    if (cur) {
        동안((cur = cur.nextSibling)) {
            if (cur === b) {
                반환 - 1;
            }
        }
    }

    반환 ? 1 : -1;
}

/**
 * 입력 유형에 대해 의사에서 사용할 함수를 반환합니다.
 * @param {문자열} 유형
 */
함수 createInputPseudo(유형) {
	반환 함수(요소) {
        var 이름 = elem.nodeName.toLowerCase();
		반환 이름 === "입력" && elem.type === 유형;
    };
}

/**
 * 버튼의 의사에서 사용할 함수를 반환합니다.
 * @param {문자열} 유형
 */
함수 createButtonPseudo(유형) {
	반환 함수(요소) {
        var 이름 = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
    };
}

/**
 * :enabled/:disabled에 대해 의사에서 사용할 함수를 반환합니다.
 * @param {Boolean} 비활성화 :disabled에 대한 true; false에 대해 :활성화됨
 */
기능 createDisabledPseudo(비활성화) {

	// 알려진 :disabled 거짓 긍정: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	반환 함수(요소) {

        // 특정 요소만 :enabled 또는 :disabled와 일치할 수 있습니다.
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
        if (요소의 "형태" ) {

            // 비활성화되지 않은 관련 요소에서 상속된 비활성화 여부를 확인합니다.
            // * 비활성화된 필드 세트에 나열된 양식 관련 요소
            // https://html.spec.whatwg.org/multipage/forms.html#category-listed
            // https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
            // * 비활성화된 optgroup의 옵션 요소
            // https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
            // 이러한 모든 요소에는 "form" 속성이 있습니다.
            if (elem.parentNode && elem.disabled === false) {

                // 옵션 요소가 있는 경우 상위 optgroup을 따릅니다.
                if (요소의 "레이블") {
                    if (elem.parentNode의 "레이블") {
                        elem.parentNode.disabled 반환 === 비활성화됨;
                    } 또 다른 {
                        return elem.disabled === 비활성화됨;
                    }
                }

                // 지원: IE 6 - 11
                // isDisabled 바로 가기 속성을 사용하여 비활성화된 필드 세트 조상을 확인합니다.
                elem.isDisabled를 반환 === 비활성화 ||

                    // isDisabled가 없는 경우 수동으로 확인
                    /* jshint -W018 */
                    elem.isDisabled !== !disabled &&
                    inDisabledFieldset(elem) === 비활성화됨;
            }

            return elem.disabled === 비활성화됨;

            // 비활성화된 속성을 신뢰하기 전에 비활성화할 수 없는 요소를 찾아내십시오.
            // 일부 희생자는 우리 네트(레이블, 범례, 메뉴, 트랙)에 걸리지만, 그렇게 해서는 안 됩니다.
            // boolean 값은 고사하고 심지어 존재합니다.
        } else if (요소의 "레이블" ) {
            return elem.disabled === 비활성화됨;
        }

		// 나머지 요소는 :enabled 또는 :disabled가 아닙니다.
		거짓을 반환합니다.
	};
}

/**
 * 위치에 대한 의사에서 사용할 함수를 반환합니다.
 * @param {함수} fn
 */
함수 createPositionalPseudo(fn) {
    return markFunction(function (인수) {
        인수 = +인수;
        return markFunction(function (seed, 일치) {
            var j,
                matchIndexes = fn([], seed.length, 인수),
                i = matchIndexes.length;

            // 지정된 인덱스에서 찾은 요소와 일치
            동안(나는--) {
                if (시드[(j = matchIndexes[i])]) {
                    시드[j] = !(일치[j] = 시드[j]);
                }
            }
        });
    });
}

/**
 * Sizzle 컨텍스트로서의 유효성을 위해 노드를 확인합니다.
 * @param {요소|객체=} 컨텍스트
 * @returns {Element|Object|Boolean} 허용되는 경우 입력 노드, 그렇지 않으면 거짓 값
 */
함수 testContext(컨텍스트) {
	컨텍스트 반환 && typeof context.getElementsByTagName !== "정의되지 않음" && 컨텍스트;
}

// 편의를 위해 지원 변수를 노출합니다.
지원 = Sizzle.support = {};

/**
 * XML 노드 감지
 * @param {Element|Object} elem 요소 또는 문서
 * @returns {Boolean} 요소가 HTML이 아닌 XML 노드인 경우 True
 */
isXML = Sizzle.isXML = 기능(요소) {
    var 네임스페이스 = elem && elem.namespaceURI,
        docElem = 요소 && (요소 소유자 문서 || 요소 ).documentElement;

    // 지원: IE <=8
    // 로딩 중인 iframe과 같이 documentElement가 아직 존재하지 않을 때 HTML을 가정합니다.
    // https://bugs.jquery.com/ticket/4833
    return !rhtml.test(네임스페이스 || docElem && docElem.nodeName || "HTML");
};

/**
 * 현재 문서를 기준으로 문서 관련 변수를 1회 설정
 * @param {Element|Object} [doc] 문서를 설정하는 데 사용할 요소 또는 문서 객체
 * @returns {Object} 현재 문서를 반환합니다.
 */
setDocument = Sizzle.setDocument = 기능(노드) {
    var hasCompare, 하위 창,
        문서 = 노드 ? node.owner 문서 || 노드 : 선호 문서;

    // 문서가 유효하지 않거나 이미 선택된 경우 일찍 반환
    // 지원: IE 11+, Edge 17 - 18+
    // IE/Edge는 엄격한 비교 시 "권한 거부됨" 오류가 발생하는 경우가 있습니다.
    // 두 개의 문서; 얕은 비교가 작동합니다.
    // eslint-disable-next-line eqeqeq
    if (문서 == 문서 || doc.nodeType !== 9 || !doc.documentElement) {
		반환 문서;
    }

    // 전역 변수 업데이트
    문서 = 문서;
    docElem = 문서.문서요소;
    documentIsHTML = !isXML(문서);

    // 지원: IE 9 - 11+, Edge 12 - 18+
    // 언로드 후 iframe 문서에 액세스하면 "권한 거부됨" 오류 발생(jQuery #13936)
    // 지원: IE 11+, Edge 17 - 18+
    // IE/Edge는 엄격한 비교 시 "권한 거부됨" 오류가 발생하는 경우가 있습니다.
    // 두 개의 문서; 얕은 비교가 작동합니다.
    // eslint-disable-next-line eqeqeq
    if (preferredDoc != 문서 &&
        (subWindow = document.defaultView) && subWindow.top !== subWindow) {

        // 지원: IE 11, 에지
        if (subWindow.addEventListener) {
            subWindow.addEventListener("unload", unloadHandler, false);

            // 지원: IE 9 - 10만
        } else if (subWindow.attachEvent) {
            subWindow.attachEvent("onunload", unloadHandler);
        }
    }

    // 지원: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25만 해당, Firefox <=3.6 - 31만,
    // Safari 4 - 5 전용, Opera <=11.6 - 12.x 전용
    // IE/Edge 및 이전 브라우저는 :scope 의사 클래스를 지원하지 않습니다.
    // 지원: Safari 6.0만 해당
    // Safari 6.0은 :scope를 지원하지만 거기에는 :root의 별칭입니다.
    support.scope = assert(함수(엘) {
        docElem.appendChild(el).appendChild(document.createElement("div"));
        반환 typeof el.querySelectorAll !== "정의되지 않음" &&
            !el.querySelectorAll(":scope fieldset div").length;
    });

    /* 속성
    -------------------------------------------------- -------------------- */

    // 지원: IE<8
    // getAttribute가 실제로 속성이 아닌 속성을 반환하는지 확인합니다.
    // (IE8 부울 제외)
    support.attributes = assert(함수(엘) {
        el.className = "나";
        반환 !el.getAttribute("className");
    });

    /* getElement 기준*
    -------------------------------------------------- -------------------- */

    // getElementsByTagName("*")이 요소만 반환하는지 확인
    support.getElementsByTagName = assert(함수(엘) {
        el.appendChild(document.createComment(""));
        반환 !el.getElementsByTagName("*").length;
    });

    // 지원: IE<9
    support.getElementsByClassName = rnative.test(document.getElementsByClassName);

    // 지원: IE<10
    // getElementById가 이름으로 요소를 반환하는지 확인
    // 깨진 getElementById 메소드는 프로그래밍 방식으로 설정된 이름을 선택하지 않습니다.
    // 그래서 원형 교차로 getElementsByName 테스트를 사용합니다.
    support.getById = assert(함수(엘) {
        docElem.appendChild(el).id = 확장;
        반환 !document.getElementsByName || !document.getElementsByName(확장).길이;
    });

    // ID 필터 및 찾기
    if (support.getById) {
        Expr.filter["ID"] = 기능(아이디) {
            var attrId = id.replace(runescape, funescape);
			반환 함수(요소) {
                return elem.getAttribute("id") === attrId;
            };
        };
        Expr.find["ID"] = 기능(아이디, 컨텍스트) {
            if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var 요소 = context.getElementById(아이디);
				요소를 반환 ? [요소] : [];
            }
        };
    } 또 다른 {
        Expr.filter["ID"] = 기능(아이디) {
            var attrId = id.replace(runescape, funescape);
			반환 함수(요소) {
                var 노드 = typeof elem.getAttributeNode !== "정의되지 않음" &&
                    elem.getAttributeNode("아이디");
				반환 노드 && node.value === attrId;
            };
        };

        // 지원: IE 6 - 7만 해당
        // getElementById는 찾기 단축키로 신뢰할 수 없습니다.
        Expr.find["ID"] = 기능(아이디, 컨텍스트) {
            if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var 노드, i, 요소,
                    요소 = context.getElementById(아이디);

                if (요소) {

                    // id 속성 확인
                    노드 = elem.getAttributeNode("아이디");
                    if (노드 && 노드 값 === 아이디 ) {
                        [요소]를 반환합니다.
					}

                    // getElementsByName으로 폴백
                    요소 = context.getElementsByName(아이디);
                    나는 = 0;
                    동안((요소 = 요소[i++])) {
                        노드 = elem.getAttributeNode("아이디");
                        if (노드 && 노드 값 === 아이디 ) {
                            [요소]를 반환합니다.
						}
                    }
                }

                반품[];
            }
        };
    }

    // 태그
    Expr.find["TAG"] = support.getElementsByTagName ?
        함수(태그, 컨텍스트) {
        if (typeof context.getElementsByTagName !== "undefined") {
				반환 context.getElementsByTagName(태그);

            // DocumentFragment 노드에는 gEBTN이 없습니다.
        } 그렇지 않으면(support.qsa) {
				반환 context.querySelectorAll(태그);
        }
    } :

    함수(태그, 컨텍스트) {
        var 요소,
            시간 = [],
            나는 = 0,

            // 우연의 일치로 (깨진) gEBTN이 DocumentFragment 노드에도 나타납니다.
            결과 = context.getElementsByTagName(태그);

        // 가능한 주석 필터링
        if (태그 === "*") {
            동안((요소 = 결과[i++])) {
                if (elem.nodeType === 1) {
                    tmp.push(요소);
                }
            }

				반환 tmp;
        }
			반환 결과;
    };

    // 수업
    Expr.find["CLASS"] = support.getElementsByClassName && function (className, 컨텍스트) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
			반환 context.getElementsByClassName(className);
        }
    };

    /* QSA/matchesSelector
    -------------------------------------------------- -------------------- */

    // QSA 및 matchSelector 지원

    // matchSelector(:active)는 true일 때 false를 보고합니다(IE9/Opera 11.5).
    rbuggyMatches = [];

    // qSa(:focus)는 true일 때 false를 보고합니다(Chrome 21).
    // 오류를 발생시키는 IE8/9의 버그 때문에 이것을 허용합니다.
    // iframe에서 `document.activeElement`에 액세스할 때마다
    // 따라서 IE 오류를 피하기 위해 :focus가 항상 QSA를 통과하도록 허용합니다.
    // https://bugs.jquery.com/ticket/13378 참조
    rbuggyQSA = [];

    if ((support.qsa = rnative.test(document.querySelectorAll))) {

        // QSA 정규식 빌드
        // Diego Perini에서 채택한 정규식 전략
        주장(함수(엘) {

            변수 입력;

            // Select는 의도적으로 빈 문자열로 설정됩니다.
            // 명시적으로 not에 대한 IE의 처리를 테스트하기 위한 것입니다.
            // 부울 콘텐츠 속성 설정,
            // 존재만으로도 충분하기 때문에
            // https://bugs.jquery.com/ticket/12359
            docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" +
                "<선택 ID='" + expando + "-\r\\' msallowcapture=''>" +
                "<선택된 옵션=''></option></select>";

            // 지원: IE8, 오페라 11-12.16
            // 빈 문자열이 ^= 또는 $= 또는 *= 뒤에 올 때 아무 것도 선택해서는 안 됩니다.
            // 테스트 속성은 Opera에서는 알 수 없지만 WinRT에서는 "안전"해야 합니다.
            // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
            if(el.querySelectorAll("[msallowcapture^='']").length ) {
            rbuggyQSA.push("[*^$]=" + 공백 + "*(?:''|\"\")");
        }

        // 지원: IE8
        // 부울 속성 및 "값"이 올바르게 처리되지 않음
        if (!el.querySelectorAll("[선택됨]").length) {
            rbuggyQSA.push("\\[" + 공백 + "*(?:값|" + 부울 + ")");
        }

        // 지원: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
        if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
        }

        // 지원: IE 11+, Edge 15 - 18+
        // IE 11/Edge는 경우에 따라 `[name='']` 쿼리에서 요소를 찾지 못합니다.
        // 선택이 작동하기 전에 문서에 임시 속성 추가
        // 문제 주변.
        // 흥미롭게도 IE 10 이상에서는 문제가 없는 것 같습니다.
        입력 = document.createElement("입력");
        input.setAttribute("이름", "");
        el.appendChild(입력);
        if (!el.querySelectorAll("[이름='']").길이) {
            rbuggyQSA.push("\\[" + 공백 + "*이름" + 공백 + "*=" +
                공백 + "*(?:''|\"\")");
        }

        // Webkit/Opera - :checked는 선택한 옵션 요소를 반환해야 합니다.
        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
        // IE8은 여기에 오류를 발생시키고 이후 테스트를 볼 수 없습니다.
        if (!el.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":체크됨");
        }

        // 지원: 사파리 8+, iOS 8+
        // https://bugs.webkit.org/show_bug.cgi?id=136851
        // 페이지 내 `selector#id 형제-조합 선택기` 실패
        if (!el.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
        }

        // 지원: Firefox <=3.6 - 5 전용
        // 오래된 Firefox는 잘못 이스케이프 처리된 식별자를 사용하지 않습니다.
        el.querySelectorAll("\\\f");
        rbuggyQSA.push("[\\r\\n\\f]");
    } );

    주장(함수(엘) {
        el.innerHTML = "<a href='' disabled='disabled'></a>" +
            "<select disabled='disabled'><option/></select>";

        // 지원: Windows 8 기본 앱
        // type 및 name 속성은 .innerHTML 할당 중에 제한됩니다.
        var 입력 = document.createElement("입력");
        input.setAttribute("유형", "숨겨진");
        el.appendChild(입력).setAttribute("이름", "D");

        // 지원: IE8
        // name 속성의 대소문자 구분 적용
        if(el.querySelectorAll("[이름=d]").길이 ) {
        rbuggyQSA.push("이름" + 공백 + "*[*^$|!~]?=");
    }

    // FF 3.5 - :enabled/:disabled 및 숨겨진 요소(숨겨진 요소는 여전히 활성화됨)
    // IE8은 여기에 오류를 발생시키고 이후 테스트를 볼 수 없습니다.
    if (el.querySelectorAll(":활성화").length !== 2) {
        rbuggyQSA.push(":활성화", ":비활성화");
    }

    // 지원: IE9-11+
    // IE의 :disabled 선택자는 비활성화된 필드셋의 자식을 선택하지 않습니다.
    docElem.appendChild(el).disabled = true;
    if (el.querySelectorAll(":disabled").length !== 2) {
        rbuggyQSA.push(":활성화", ":비활성화");
    }

    // 지원: Opera 10 - 11만
    // Opera 10-11은 쉼표 뒤에 오는 잘못된 의사를 throw하지 않습니다.
    el.querySelectorAll("*,:x");
    rbuggyQSA.push(",.*:");
} );
	}

if ((support.matchesSelector = rnative.test((일치 = docElem.matches ||
    docElem.webkitMatchesSelector ||
    docElem.mozMatchesSelector ||
    docElem.oMatchesSelector ||
    docElem.msMatchesSelector)))) {

    주장(함수(엘) {

        // matchSelector를 수행할 수 있는지 확인
        // 연결이 끊긴 노드에서(IE 9)
        support.disconnectedMatch = match.call(el, "*");

        // 예외와 함께 실패해야 합니다.
        // Gecko는 오류가 발생하지 않으며 대신 false를 반환합니다.
        match.call(el, "[s!='']:x");
        rbuggyMatches.push("!=", 의사);
    });
}

rbuggyQSA = rbuggyQSA.length && 새로운 RegExp(rbuggyQSA.join("|"));
rbuggyMatches = rbuggyMatches.length && 새로운 RegExp(rbuggyMatches.join("|"));

/* 포함
-------------------------------------------------- -------------------- */
hasCompare = rnative.test(docElem.compareDocumentPosition);

// 요소에 다른 요소가 포함됨
// 의도적으로 자체 배타적
// 요소는 자신을 포함하지 않습니다.
포함 = hasCompare || rnative.test(docElem.contains) ?
    함수(a, b) {
    var adown = a.nodeType === 9 ? a.documentElement : a,
        bup = b && b.parentNode;
    반환 === 웁 || !!(bup && bup.nodeType === 1 && (
        adown.contains ?
            adown.contains(bup) :
            a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
    ));
} :
함수(a, b) {
    만약(b) {
        동안((b = b.parentNode)) {
            if (b === a) {
						true를 반환합니다.
					}
        }
    }
			거짓을 반환합니다.
		};

/* 정렬
-------------------------------------------------- -------------------- */

// 문서 순서 정렬
sortOrder = hasCompare ?
    함수(a, b) {

    // 중복 제거 플래그
    if (a === b) {
        hasDuplicate = 참;
			반환 0;
    }

    // 하나의 입력에만 compareDocumentPosition이 있는 경우 메서드 존재에 따라 정렬
    var 비교 = !a.compareDocumentPosition - !b.compareDocumentPosition;
    만약(비교) {
			반환 비교;
    }

    // 두 입력이 동일한 문서에 속하는 경우 위치 계산
    // 지원: IE 11+, Edge 17 - 18+
    // IE/Edge는 엄격한 비교 시 "권한 거부됨" 오류가 발생하는 경우가 있습니다.
    // 두 개의 문서; 얕은 비교가 작동합니다.
    // eslint-disable-next-line eqeqeq
    비교 = (a.ownerDocument || a) == (b.ownerDocument || b) ?
        a.compareDocumentPosition(b) :

        // 그렇지 않으면 연결이 끊어진 것을 알 수 있습니다.
        1;

    // 연결이 끊긴 노드
    if (비교 & 1 ||
        (!support.sortDetached && b.compareDocumentPosition(a) === 비교)) {

        // 선호하는 문서와 관련된 첫 번째 요소를 선택합니다.
        // 지원: IE 11+, Edge 17 - 18+
        // IE/Edge는 엄격한 비교 시 "권한 거부됨" 오류가 발생하는 경우가 있습니다.
        // 두 개의 문서; 얕은 비교가 작동합니다.
        // eslint-disable-next-line eqeqeq
        if (a == 문서 || a.ownerDocument == preferredDoc &&
            포함(선호 문서, a)) {
            반환 - 1;
        }

        // 지원: IE 11+, Edge 17 - 18+
        // IE/Edge는 엄격한 비교 시 "권한 거부됨" 오류가 발생하는 경우가 있습니다.
        // 두 개의 문서; 얕은 비교가 작동합니다.
        // eslint-disable-next-line eqeqeq
        if (b == 문서 || b.ownerDocument == preferredDoc &&
            포함(선호 문서, b)) {
				반환 1;
        }

			// 원래 순서 유지
			반환 정렬 입력 ?
            (indexOf(sortInput, a) - indexOf(sortInput, b)) :
            0;
    }

    비교 & 4 반환 ? -1 : 1;
} :
함수(a, b) {

    // 노드가 동일하면 일찍 종료
    if (a === b) {
        hasDuplicate = 참;
			반환 0;
    }

		바 커,
        나는 = 0,
        aup = a.parentNode,
        bup = b.parentNode,
        ap = [a],
        bp = [b];

    // 부모가 없는 노드는 문서이거나 연결이 끊긴 상태입니다.
    if (!aup || !bup) {

			// 지원: IE 11+, Edge 17 - 18+
			// IE/Edge는 엄격한 비교 시 "권한 거부됨" 오류가 발생하는 경우가 있습니다.
			// 두 개의 문서; 얕은 비교가 작동합니다.
			/* eslint-disable eqeqeq */
			== 문서를 반환합니까 ? -1 :
            b == 문서 ? 1 :
                /* eslint 활성화 eqeqeq */
                업 ? -1 :
                    버프 ? 1 :
                        정렬 입력 ?
                            (indexOf(sortInput, a) - indexOf(sortInput, b)) :
                            0;

        // 노드가 형제라면 빠른 검사를 할 수 있습니다.
    } else if (aup === bup) {
			반환 형제 체크(a, b);
    }

    // 그렇지 않으면 비교를 위해 조상의 전체 목록이 필요합니다.
    커 = 에이;
    동안((cur = cur.parentNode)) {
        ap.unshift(cur);
    }
    커 = b;
    동안((cur = cur.parentNode)) {
        bp.unshift(cur);
    }

    // 불일치를 찾기 위해 나무 아래로 걸어갑니다.
    동안(ap[i] === bp[i]) {
        나는++;
    }

		나는 반환 ?

        // 노드에 공통 조상이 있는지 형제 검사를 수행합니다.
        형제 체크(ap[i], bp[i]) :

    // 그렇지 않으면 문서의 노드가 먼저 정렬됩니다.
    // 지원: IE 11+, Edge 17 - 18+
    // IE/Edge는 엄격한 비교 시 "권한 거부됨" 오류가 발생하는 경우가 있습니다.
    // 두 개의 문서; 얕은 비교가 작동합니다.
    /* eslint-disable eqeqeq */
    ap[i] == preferredDoc ? -1 :
        bp[i] == preferredDoc ? 1 :
            /* eslint 활성화 eqeqeq */
            0;
};

	반환 문서;
};

Sizzle.matches = function (expr, elements) {
    return Sizzle(expr, null, null, 요소);
};

Sizzle.matchesSelector = function (요소, expr) {
    세트문서(요소);

    if (support.matchesSelector && documentIsHTML &&
        !nonnativeSelectorCache[expr + " "] &&
        (!rbuggyMatches || !rbuggyMatches.test(expr)) &&
        (!rbuggyQSA || !rbuggyQSA.test(expr))) {

		노력하다 {
            var ret = match.call(요소, expr);

            // IE 9의 matchSelector는 연결이 끊긴 노드에서 false를 반환합니다.
            if (ret || support.disconnectedMatch ||

                // 또한 연결이 끊긴 노드는 문서에 있다고 합니다.
                // IE 9의 프래그먼트
                elem.document && elem.document.nodeType !== 11) {
				리턴 렛;
            }
        } 잡기(e) {
            nonnativeSelectorCache(expr, true);
        }
    }

    return Sizzle(expr, document, null, [elem]).length > 0;
};

Sizzle.contains = function (컨텍스트, 요소) {

    // 필요한 경우 문서 변수 설정
    // 지원: IE 11+, Edge 17 - 18+
    // IE/Edge는 엄격한 비교 시 "권한 거부됨" 오류가 발생하는 경우가 있습니다.
    // 두 개의 문서; 얕은 비교가 작동합니다.
    // eslint-disable-next-line eqeqeq
    if ((context.ownerDocument || 컨텍스트) != 문서) {
        setDocument(컨텍스트);
    }
	반환 포함(컨텍스트, 요소);
};

Sizzle.attr = function (요소, 이름) {

    // 필요한 경우 문서 변수 설정
    // 지원: IE 11+, Edge 17 - 18+
    // IE/Edge는 엄격한 비교 시 "권한 거부됨" 오류가 발생하는 경우가 있습니다.
    // 두 개의 문서; 얕은 비교가 작동합니다.
    // eslint-disable-next-line eqeqeq
    if ((elem.ownerDocument || elem) != 문서) {
        세트문서(요소);
    }

    var fn = Expr.attrHandle[이름.toLowerCase()],

        // Object.prototype 속성에 속지 마세요(jQuery #13807)
        val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ?
            fn(요소, 이름, !documentIsHTML) :
            찾으시는 주소가 없습니다;

	반환 값 !== 정의되지 않음 ?
        발 :
        지원.속성 || !documentIsHTML ?
            elem.getAttribute(이름) :
            (val = elem.getAttributeNode(name)) && val.specified ?
                값 :
                없는;
};

Sizzle.escape = 기능(선택) {
    반환(sel + "").replace(rcssescape, fcssescape);
};

지글지글 오류 = 기능(메시지) {
    throw new Error("구문 오류, 인식할 수 없는 표현식: " + msg);
};

/**
 * 문서 정렬 및 중복 제거
 * @param {ArrayLike} 결과
 */
Sizzle.uniqueSort = function (결과) {
    var 요소,
        중복 = [],
        j = 0,
        나는 = 0;

    // 중복을 감지할 수 *알지* 않는 한* 존재한다고 가정합니다.
    hasDuplicate = !support.detectDuplicates;
    sortInput = !support.sortStable && 결과.슬라이스(0);
    결과.정렬(정렬순서);

    if (hasDuplicate) {
        동안((요소 = 결과[i++])) {
            if (요소 === 결과[나는]) {
                j = 복제.푸시(i);
            }
        }
        동안(j--) {
            result.splice(중복[j], 1);
        }
    }

	// 해제 객체를 위해 정렬 후 입력 지우기
	// https://github.com/jquery/sizzle/pull/225 참조
	정렬 입력 = null;

	반환 결과;
};

/**
 * DOM 노드 배열의 텍스트 값 검색을 위한 유틸리티 함수
 * @param {배열|요소} 요소
 */
getText = Sizzle.getText = 기능(요소) {
    var 노드,
        렛 = "",
        나는 = 0,
        노드 유형 = 요소.노드 유형;

    if (!노드 유형 ) {

        // nodeType이 없으면 배열로 예상됩니다.
        동안((노드 = 요소[i++])) {

            // 주석 노드를 트래버스하지 않음
            ret += getText(노드);
        }
    } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {

        // 요소에 textContent 사용
        // 새 줄의 일관성을 위해 innerText 사용이 제거됨(jQuery #11153)
        if (typeof elem.textContent === "문자열") {
            elem.textContent를 반환합니다.
		} 또 다른 {

            // 자식 순회
            (요소 = elem.firstChild; 요소; 요소 = elem.nextSibling) {
                ret += getText(요소);
            }
        }
    } else if (nodeType === 3 || nodeType === 4) {
        elem.nodeValue를 반환합니다.
	}

	// 주석 또는 처리 명령 노드를 포함하지 않습니다.

	리턴 렛;
};

Expr = Sizzle.selectors = {

    // 사용자가 조정할 수 있음
    캐시 길이: 50,

    createPseudo: 표시 기능,

    일치: matchExpr,

    속성 핸들: {},

    찾기: {},

    상대적인: {
        ">": { 디렉토리: "parentNode", 첫 번째: true },
        " ": { 디렉토리: "부모 노드" },
        "+": { 디렉토리: "previousSibling", 첫 번째: true },
        "~": { 디렉토리: "이전 형제자매" }
    },

    사전 필터: {
        "ATTR": 기능(일치) {
    match[1] = match[1].replace(runescape, funescape);

    // 인용 또는 인용 여부에 관계없이 주어진 값을 match[3]으로 이동합니다.
    일치[3] = (일치[3] || 일치[4] ||
        매치[5] || "").replace(룬스케이프, 펀스케이프);

    if (일치[2] === "~=") {
        일치[3] = " " + 일치[3] + " ";
    }

    match.slice(0, 4)를 반환합니다.
		},

"자식": 기능(일치) {

    /* matchExpr["CHILD"]에서 일치
        1종(단|n번째|...)
        2 무엇
        3개의 인수(짝수|홀수|\d*|\d*n([+-]\d+)?|...)
        4 xn+y 인수의 xn 구성 요소([+-]?\d*n|)
        xn 구성 요소의 5 기호
        xn 구성 요소의 6 x
        y 성분의 7 기호
        y-성분의 8년
    */
    일치[1] = 일치[1].toLowerCase();

    if (match[1].slice(0, 3) === "n번째") {

        // n번째-*에는 인수가 필요합니다.
        if (!일치[3]) {
            Sizzle.error(일치[0]);
        }

        // Expr.filter.CHILD에 대한 숫자 x 및 y 매개변수
        // false/true를 각각 0/1로 캐스트한다는 것을 기억하십시오.
        일치[4] = +(일치[4] ?
            일치[5] + (일치[6] || 1) :
            2 * (일치[3] === "짝수" || 일치[3] === "홀수"));
        일치[5] = +((일치[7] + 일치[8]) || 일치[3] === "홀수");

        // 다른 유형은 인수를 금지합니다.
    } else if (일치[3]) {
        Sizzle.error(일치[0]);
    }

			반환 일치;
},

"의사": 기능(일치) {
    var 초과,
        인용되지 않은 = !match[6] && match[2];

    if (matchExpr["CHILD"].test(match[0])) {
				널 반환;
    }

    // 인용된 인수를 있는 그대로 수락
    if (일치[3]) {
        일치[2] = 일치[4] || 매치[5] || "";

        // 인용되지 않은 인수에서 초과 문자 제거
    } else if (인용되지 않은 && rpseudo.test(인용되지 않은) &&

        // 토큰화에서 초과분 가져오기(재귀적으로)
        (초과 = 토큰화(인용되지 않음, 참)) &&

        // 다음 닫는 괄호로 이동
        (초과 = unquoted.indexOf(")", unquoted.length - 초과) - unquoted.length) ) {

        // 초과는 음수 인덱스입니다.
        match[0] = match[0].slice(0, 초과);
        match[2] = unquoted.slice(0, 초과);
    }

    // 의사 필터 메서드에 필요한 캡처만 반환(유형 및 인수)
    match.slice(0, 3) 반환;
}
	},

필터: {

    "TAG": 기능(nodeNameSelector) {
        var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
			반환 nodeNameSelector === "*" ?
            기능() {
					true를 반환합니다.
				} :
        기능(요소) {
            elem.nodeName 반환 && elem.nodeName.toLowerCase() === nodeName;
        };
    },

    "클래스": 기능(클래스 이름) {
        var 패턴 = classCache[className + " "];

			반환 패턴 ||
            (패턴 = new RegExp("(^|" + 공백 +
                ")" + className + "(" + 공백 + "|$)")) && classCache(
                    클래스 이름, 기능(요소) {
                    반환 패턴.테스트(
                        typeof elem.className === "문자열" && elem.className ||
                        typeof elem.getAttribute !== "정의되지 않음" &&
                        elem.getAttribute("클래스") ||
                        ""
                    );
                });
    },

    "ATTR": function(이름, 연산자, 확인) {
			반환 함수(요소) {
            var 결과 = Sizzle.attr(요소, 이름);

            if (결과 == null) {
					반환 연산자 === "!=";
            }
            if (!연산자) {
					true를 반환합니다.
				}

            결과 += "";

				/* eslint-disable max-len */

				반환 연산자 === "=" ? 결과 === 확인 :
                연산자 === "!=" ? 결과 !== 확인 :
                    연산자 === "^=" ? 확인 && result.indexOf(확인) === 0 :
                        연산자 === "*=" ? 확인 && result.indexOf(확인) > -1 :
                            연산자 === "$=" ? 확인 && result.slice(-check.length) === 확인 :
                                연산자 === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(체크) > -1 :
                                    연산자 === "|=" ? 결과 === 확인 || result.slice(0, check.length + 1) === 검사 + "-" :
                                        거짓;
            /* eslint-enable max-len */

        };
    },

    "CHILD": function(type, what, _argument, first, last) {
        var 단순 = type.slice(0, 3) !== "n번째",
            앞으로 = type.slice(-4) !== "마지막",
            ofType = 무엇 === "유형";

			처음 반환 === 1 && 마지막 === 0 ?

            // :nth-*(n) 단축키
            기능(요소) {
            반환!!elem.parentNode;
        } :

        함수(요소, _context, xml) {
            var 캐시, uniqueCache, outerCache, 노드, nodeIndex, 시작,
                dir = 단순 !== 앞으로 ? "nextSibling" : "previousSibling",
                부모 = elem.parentNode,
                이름 = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                차이 = 거짓;

            if (부모) {

                // :(첫 번째|마지막|만)-(자식|유형)
                if (단순) {
                    동안(디렉토리) {
                        노드 = 요소;
                        동안((노드 = 노드[디렉토리])) {
                            if (유형 ?
                                node.nodeName.toLowerCase() === 이름 :
                                노드.노드 유형 === 1 ) {

										거짓을 반환합니다.
									}
                        }

                        // :only-*에 대한 방향을 반대로 합니다(아직 수행하지 않은 경우).
                        시작 = 디렉토리 = 유형 === "만" && !start && "nextSibling";
                    }
							true를 반환합니다.
						}

                시작 = [앞으로 ? parent.firstChild : parent.lastChild];

                // non-xml :nth-child(...) 캐시 데이터를 `parent`에 저장
                if (앞으로 && useCache) {

                    // 이전에 캐시된 인덱스에서 'elem'을 찾습니다.

                    // ...gzip 친화적인 방식으로
                    노드 = 부모;
							외부 캐시 = 노드[확장] || (노드[확장] = {});

                    // 지원: IE <9 전용
                    // 복제된 attroperties로부터 방어(jQuery gh-1709)
                    uniqueCache = 외부 캐시[node.uniqueID] ||
                        (외부캐시[node.uniqueID] = {});

                    캐시 = 고유 캐시[유형] || [];
                    nodeIndex = 캐시[0] === 디렉토리 && 캐시[1];
                    diff = nodeIndex && 캐시[2];
                    노드 = nodeIndex && parent.childNodes[nodeIndex];

                    동안((노드 = ++nodeIndex && 노드 && 노드[디렉토리] ||

                        // 처음부터 `elem`을 찾는 것으로 폴백
                        (차이 = nodeIndex = 0) || 시작.팝())) {

                        // 발견되면 `parent`에 인덱스를 캐시하고 중단합니다.
                        if (node.nodeType === 1 && ++diff && 노드 === 요소) {
                            uniqueCache[유형] = [디렉토리, nodeIndex, diff];
                            부서지다;
                        }
                    }

                } 또 다른 {

                    // 사용 가능한 경우 이전에 캐시된 요소 인덱스 사용
                    if (useCache) {

                        // ...gzip 친화적인 방식으로
                        노드 = 요소;
								외부 캐시 = 노드[확장] || (노드[확장] = {});

                        // 지원: IE <9 전용
                        // 복제된 attroperties로부터 방어(jQuery gh-1709)
                        uniqueCache = 외부 캐시[node.uniqueID] ||
                            (외부캐시[node.uniqueID] = {});

                        캐시 = 고유 캐시[유형] || [];
                        nodeIndex = 캐시[0] === 디렉토리 && 캐시[1];
                        차이 = 노드 인덱스;
                    }

                    // xml :n번째 자식(...)
                    // 또는 :nth-last-child(...) 또는 :nth(-last)?-of-type(...)
                    if (차이 === 거짓) {

                        // 위와 같은 루프를 사용하여 처음부터 `elem`을 찾습니다.
                        동안((노드 = ++nodeIndex && 노드 && 노드[디렉토리] ||
                            (차이 = nodeIndex = 0) || 시작.팝())) {

                            if ((유형 ?
                                node.nodeName.toLowerCase() === 이름 :
                                node.nodeType === 1) &&
                                ++차이) {

                                // 발견된 각 요소의 인덱스를 캐시합니다.
                                if (useCache) {
											외부 캐시 = 노드[확장] ||
                                        (노드[확장] = {});

                                    // 지원: IE <9 전용
                                    // 복제된 attroperties로부터 방어(jQuery gh-1709)
                                    uniqueCache = 외부 캐시[node.uniqueID] ||
                                        (외부캐시[node.uniqueID] = {});

                                    uniqueCache[유형] = [디렉토리, 차이];
                                }

                                if (노드 === 요소) {
                                    부서지다;
                                }
                            }
                        }
                    }
                }

                // 오프셋을 통합한 다음 사이클 크기를 확인합니다.
                diff -= 마지막;
						반환 차이 === 첫 번째 || (차이 % 첫 번째 === 0 && 차이 / 첫 번째 >= 0 );
            }
        };
    },

    "의사": 함수(유사, 인수) {

			// 의사 클래스 이름은 대소문자를 구분하지 않습니다.
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// 사용자 정의 의사가 대문자로 추가되는 경우 대소문자 구분으로 우선 순위 지정
			// setFilters는 의사로부터 상속된다는 것을 기억하십시오.
			변수 인수,
            fn = Expr.pseudos[유사] || Expr.setFilters[pseudo.toLowerCase()] ||
            Sizzle.error("지원되지 않는 의사: " + 의사);

        // 사용자는 createPseudo를 사용하여 다음을 나타낼 수 있습니다.
        // 필터 함수를 생성하려면 인수가 필요합니다.
        // Sizzle이 하는 것처럼
        if (fn[확장]) {
				반환 fn(인수);
        }

        // 그러나 이전 서명에 대한 지원을 유지합니다.
        if (fn.length > 1) {
            args = [의사, 의사, "", 인수];
				반환 Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ?
                markFunction(함수(시드, 일치) {
                    var idx,
                    일치 = fn(시드, 인수),
                    나는 = 일치하는 길이;
                    동안(나는--) {
                idx = indexOf(시드, 일치[i]);
                시드[idx] = !(일치[idx] = 일치[i]);
            }
        } ) :
        기능(요소) {
						반환 fn(요소, 0, 인수);
        };
    }

			리턴 fn;
}
	},

유사: {

    // 잠재적으로 복잡한 의사
    "not": markFunction(function (선택기) {

        // 컴파일에 전달된 선택기를 트리밍합니다.
        // 선행 및 후행 처리를 피하기 위해
        // 공백을 결합자로 사용
        var 입력 = [],
            결과 = [],
            matcher = compile(selector.replace(rtrim, "$1"));

			반환 매처[expando] ?
            markFunction(function (시드, 일치, _context, xml) {
                var 요소,
                    일치하지 않는 = matcher(seed, null, xml, []),
                    나는 = 시드.길이;

                // `matcher`와 일치하지 않는 요소를 찾습니다.
                동안(나는--) {
                    if ((요소 = 일치하지 않는[i] ) ) {
        seed[i] = !(일치[i] = elem);
    }
}
				} ) :
함수(요소, _context, xml) {
    입력[0] = 요소;
    matcher(입력, null, xml, 결과);

    // 요소를 유지하지 않음(문제 #299)
    입력[0] = 널;
    반환!results.pop();
};
		} ),

"있다": markFunction(function (선택기) {
			반환 함수(요소) {
				반환 Sizzle(선택기, 요소).length > 0;
    };
}),

    "포함": markFunction(function (text) {
        텍스트 = text.replace(runescape, funescape);
			반환 함수(요소) {
            반환(elem.textContent || getText(elem)).indexOf(텍스트) > -1;
        };
    }),

        // "요소가 :lang() 선택기로 표현되는지 여부
        // 요소의 언어 값에만 기반합니다.
        // 식별자 C와 동일하고,
        // 또는 식별자 C로 시작하고 바로 뒤에 "-"가 옵니다.
        // 요소의 언어 값에 대한 C의 일치는 대소문자를 구분하지 않고 수행됩니다.
        // 식별자 C는 유효한 언어 이름일 필요가 없습니다."
        // http://www.w3.org/TR/selectors/#lang-pseudo
        "언어": markFunction(함수(언어) {

            // lang 값은 유효한 식별자여야 합니다.
            if( !ridentifier.test(언어 || "") ) {
    Sizzle.error("지원되지 않는 언어: " + lang);
}
lang = lang.replace(룬스케이프, 펀스케이프).toLowerCase();
			반환 함수(요소) {
    var elemlang;
				하다 {
        if ((elemLang = documentIsHTML ?
            elem.lang :
            elem.getAttribute("xml:lang") || 요소.getAttribute("언어"))) {

            elemLang = elemLang.toLowerCase();
						요소 반환 === 언어 || elemLang.indexOf(언어 + "-") === 0;
        }
    } 동안((elem = elem.parentNode) && elem.nodeType === 1);
				거짓을 반환합니다.
			};
		} ),

// 기타
"대상": 기능(요소) {
    var 해시 = window.location && window.location.hash;
			반환 해시 && hash.slice(1) === elem.id;
},

"루트": 기능(요소) {
			요소를 반환 === docElem;
},

"초점": 기능(요소) {
			요소를 반환 === document.activeElement &&
        (!document.hasFocus || document.hasFocus()) &&
        !!(elem.type || elem.href || ~elem.tabIndex);
},

// 부울 속성
"활성화": createDisabledPseudo(false),
    "비활성화": createDisabledPseudo(true),

        "확인": 기능(요소) {

    // CSS3에서 :checked는 체크된 요소와 선택된 요소를 모두 반환해야 합니다.
    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
    var 노드 이름 = elem.nodeName.toLowerCase();
    return (nodeName === "입력" && !!elem.checked) ||
        (nodeName === "옵션" && !!elem.selected);
},

"선택됨": 기능(요소) {

    // 이 속성에 액세스하면 기본적으로 선택됩니다.
    // Safari의 옵션이 제대로 작동합니다.
    if (elem.parentNode) {
        // eslint-disable-next-line no-unused-expressions
        elem.parentNode.selectedIndex;
    }

    elem.selected를 반환 === true;
},

// 내용물
"비어 있음": 함수(요소) {

    // http://www.w3.org/TR/selectors/#empty-pseudo
    // :empty는 요소(1) 또는 콘텐츠 노드(텍스트: 3; cdata: 4; 엔티티 참조: 5)에 의해 무효화됩니다.
    // 그러나 다른 사람에 의한 것은 아님(주석: 8; 처리 명령: 7 등)
    // nodeType < 6은 속성 (2)가 자식으로 나타나지 않기 때문에 작동합니다.
    (요소 = elem.firstChild; 요소; 요소 = elem.nextSibling) {
        if (elem.nodeType < 6) {
					거짓을 반환합니다.
				}
    }
			true를 반환합니다.
		},

"부모": 기능(요소) {
    반환!Expr.pseudos["비어 있음"](요소);
},

// 요소/입력 유형
"헤더": 기능(요소) {
			반환 rheader.test(elem.nodeName);
},

"입력": 기능(요소) {
			반환 rinputs.test(elem.nodeName);
},

"버튼": 기능(요소) {
    var 이름 = elem.nodeName.toLowerCase();
			반환 이름 === "입력" && 요소 유형 === "버튼" || 이름 === "버튼";
},

"텍스트": 함수(요소) {
			변수 속성;
			반환 elem.nodeName.toLowerCase() === "입력" &&
        elem.type === "텍스트" &&

        // 지원: IE<8
        // 새로운 HTML5 속성 값(예: "search")은 elem.type === "text"와 함께 나타납니다.
        ((속성 = elem.getAttribute("유형")) == null ||
            attr.toLowerCase() === "텍스트");
},

// 수집 위치
"첫 번째": createPositionalPseudo(function () {
    반환[0];
}),

    "마지막": createPositionalPseudo(function (_matchIndexes, 길이) {
        반환[길이 - 1];
    }),

        "eq": createPositionalPseudo(function (_matchIndexes, 길이, 인수) {
            반환[인수 < 0 ? 인수 + 길이 : 인수];
        }),

            "짝수": createPositionalPseudo(function (matchIndexes, length) {
			변수 i = 0;
                ( ; 나는 < 길이; 나는 += 2 ) {
    matchIndexes.push(나는);
}
			matchIndex를 반환합니다.
		} ),

"홀수": createPositionalPseudo(function (matchIndexes, length) {
			변수 i = 1;
    ( ; 나는 < 길이; 나는 += 2 ) {
    matchIndexes.push(나는);
}
			matchIndex를 반환합니다.
		} ),

"lt": createPositionalPseudo(function (matchIndexes, 길이, 인수) {
    var i = 인수 < 0 ?
        인수 + 길이 :
        인수 > 길이 ?
            길이 :
            논쟁;
    ( ; --i >= 0; ) {
    matchIndexes.push(나는);
}
			matchIndex를 반환합니다.
		} ),

"gt": createPositionalPseudo(function (matchIndexes, 길이, 인수) {
    var i = 인수 < 0 ? 인수 + 길이 : 인수;
    ( ; ++i < 길이; ) {
    matchIndexes.push(나는);
}
			matchIndex를 반환합니다.
		} )
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// 버튼/입력 유형 의사 추가
for (i in { 라디오: true, 체크박스: true, 파일: true, 비밀번호: true, 이미지: true }) {
    Expr.pseudos[i] = createInputPseudo(i);
}
for (i in { submit: true, reset: true }) {
    Expr.pseudos[i] = createButtonPseudo(i);
}

// 새로운 setFilter를 생성하기 위한 쉬운 API
함수 setFilters() { }
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = 새로운 setFilters();

토큰화 = Sizzle.tokenize = function (선택기, parseOnly) {
    var 일치, 일치, 토큰, 유형,
        지금까지, 그룹, 사전 필터,
        캐시된 = 토큰캐시[선택기 + " "];

    if (캐시됨) {
		parseOnly를 반환합니까 ? 0 : cached.slice(0);
    }

    지금까지 = 선택기;
    그룹 = [];
    preFilters = Expr.preFilter;

    동안(지금까지) {

        // 쉼표 및 첫 번째 실행
        if (!matched || (match = rcomma.exec(soFar))) {
            if (일치) {

                // 후행 쉼표를 유효한 것으로 사용하지 마십시오.
                soFar = soFar.slice(match[0].length) || 지금까지;
            }
            groups.push((토큰 = []));
        }

        일치 = 거짓;

        // 결합자
        if ((일치 = rcombinators.exec(soFar))) {
            일치 = match.shift();
            tokens.push({
                값: 일치,

                // 자손 결합자를 공간으로 캐스팅
                유형: match[0].replace(rtrim, " ")
            });
            soFar = soFar.slice(matched.length);
        }

        // 필터
        for (Expr.filter 입력 ) {
            if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] ||
                (일치 = preFilters[유형](일치)))) {
                일치 = match.shift();
                tokens.push({
                    값: 일치,
                    유형: 유형,
                    일치: 일치
                });
                soFar = soFar.slice(matched.length);
            }
        }

        if (!일치) {
            부서지다;
        }
    }

	// 유효하지 않은 초과의 길이를 반환
	// 파싱만 하는 경우
	// 그렇지 않으면 오류를 던지거나 토큰을 반환합니다.
	parseOnly를 반환합니까 ?
        soFar.길이 :
        지금까지 ?
            Sizzle.error(선택기) :

            // 토큰 캐시
            tokenCache(선택자, 그룹).slice(0);
};

기능 toSelector(토큰) {
	변수 i = 0,
        len = 토큰.길이,
        선택기 = "";
    ( ; 나는 < len; 나는++ ) {
        선택기 += 토큰[i].값;
    }
	반환 선택기;
}

기능 addCombinator(매처, 결합자, 기본) {
    var 디렉토리 = 결합자.dir,
        건너뛰기 = 결합기.next,
        키 = 건너뛰기 || 디렉토리,
        checkNonElements = 기본 && 키 === "parentNode",
        완료 이름 = 완료++;

    결합자.첫 번째를 반환합니까 ?

        // 가장 가까운 조상/선행 요소에 대해 확인
        함수(요소, 컨텍스트, XML) {
        동안((요소 = 요소[디렉토리])) {
            if (elem.nodeType === 1 || checkNonElements) {
					반환 일치자(요소, 컨텍스트, xml);
            }
        }
			거짓을 반환합니다.
		} :

    // 모든 조상/선행 요소에 대해 검사
    함수(요소, 컨텍스트, XML) {
        var oldCache, uniqueCache, outerCache,
            newCache = [디렉터리 실행, 완료 이름];

        // XML 노드에 임의의 데이터를 설정할 수 없으므로 결합기 캐싱의 이점을 얻지 못합니다.
        if (xml) {
            동안((요소 = 요소[디렉토리])) {
                if (elem.nodeType === 1 || checkNonElements) {
                    if (매처(요소, 컨텍스트, xml)) {
							true를 반환합니다.
						}
                }
            }
        } 또 다른 {
            동안((요소 = 요소[디렉토리])) {
                if (elem.nodeType === 1 || checkNonElements) {
						외부 캐시 = 요소[확장] || (요소[확장] = {});

						// 지원: IE <9 전용
						// 복제된 attroperties로부터 방어(jQuery gh-1709)
						고유 캐시 = 외부 캐시[elem.uniqueID] ||
                        (외부캐시[elem.uniqueID] = {});

                    if (건너뛰기 && 건너뛰기 === elem.nodeName.toLowerCase()) {
                        요소 = 요소[디렉토리] || 요소;
                    } else if ((oldCache = uniqueCache[키]) &&
                        oldCache[0] === dirruns && oldCache[1] === doneName) {

                        // 결과가 이전 요소로 역전파되도록 newCache에 할당
                        반환(newCache[2] = oldCache[2]);
                    } 또 다른 {

                        // 결과가 이전 요소로 역전파되도록 newcache를 재사용합니다.
                        uniqueCache[키] = newCache;

                        // 일치하면 완료되었음을 의미합니다. 실패는 우리가 계속 확인해야 함을 의미합니다
                        if ((newCache[2] = matcher(요소, 컨텍스트, xml))) {
								true를 반환합니다.
							}
                    }
                }
            }
        }
			거짓을 반환합니다.
		};
}

기능 elementMatcher(매처) {
	반환 matchers.length > 1 ?
        함수(요소, 컨텍스트, XML) {
        var i = matchers.length;
        동안(나는--) {
            if (!matcher[i](요소, 컨텍스트, xml)) {
					거짓을 반환합니다.
				}
        }
			true를 반환합니다.
		} :
    일치자[0];
}

function multipleContexts(선택기, 컨텍스트, 결과) {
	변수 i = 0,
        len = contexts.length;
    ( ; 나는 < len; 나는++ ) {
        Sizzle(선택기, 컨텍스트[i], 결과);
    }
	반환 결과;
}

function condense(일치하지 않음, 맵, 필터, 컨텍스트, xml) {
    var 요소,
        새로운 일치하지 않는 = [],
        나는 = 0,
        len = 일치하지 않는.길이,
        매핑된 = 지도 != null;

    ( ; 나는 < len; 나는++ ) {
        if ((요소 = 일치하지 않는[i] ) ) {
            if (!filter || filter(요소, 컨텍스트, xml)) {
                newUnmatched.push(요소);
                if (매핑된) {
                    map.push(나는);
                }
            }
        }
    }

	반환 newUnmatched;
}

함수 setMatcher(preFilter, 선택기, 매처, postFilter, postFinder, postSelector) {
    if (postFilter && !postFilter[확장]) {
        postFilter = setMatcher(postFilter);
    }
    if (postFinder && !postFinder[확장]) {
        postFinder = setMatcher(postFinder, postSelector);
    }
    return markFunction(function (seed, results, context, xml) {
        var temp, i, elem,
            사전 지도 = [],
            포스트맵 = [],
            기존 = 결과.길이,

            // 시드 또는 컨텍스트에서 초기 요소 가져오기
            요소 = 씨앗 || 다중 컨텍스트(
                선택기 || "*",
                컨텍스트.노드 유형 ? [문맥] : 문맥,
                    []
			),

        // 시드 결과 동기화를 위해 맵을 유지하면서 매처 입력을 얻기 위한 사전 필터링
        matcherIn = preFilter && (시드 || !selector) ?
            압축(요소, preMap, preFilter, 컨텍스트, xml) :
            요소,

        matcherOut = 일치자 ?

            // postFinder, 필터링된 시드, 시드가 아닌 postFilter 또는 기존 결과가 있는 경우
            포스트파인더 || (시드 ? preFilter : 기존 || postFilter) ?

                // ...중간 처리가 필요하다
                [] :

                // ...그렇지 않으면 결과를 직접 사용
                결과 :
            매처인;

    // 기본 일치 찾기
    if (매처) {
        matcher(matcherIn, matcherOut, 컨텍스트, xml);
    }

    // postFilter 적용
    if (postFilter) {
        temp = condense(matcherOut, postMap);
        postFilter(임시, [], 컨텍스트, xml);

        // 실패한 요소를 다시 matcherIn으로 이동하여 일치 해제
        나는 = 온도 길이;
        동안(나는--) {
            if ((요소 = 임시[나는])) {
                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = 요소);
            }
        }
    }

    if (씨앗) {
        if (postFinder || preFilter) {
            if (postFinder) {

                // 이 중간을 postFinder 컨텍스트로 압축하여 최종 matcherOut을 가져옵니다.
                온도 = [];
                나는 = matcherOut.length;
                동안(나는--) {
                    if ((요소 = matcherOut[i])) {

                        // elem이 아직 최종 일치가 아니기 때문에 matcherIn을 복원합니다.
                        temp.push((matcherIn[i] = elem));
                    }
                }
                postFinder(null, (matcherOut = []), 임시, xml);
            }

            // 일치하는 요소를 시드에서 결과로 이동하여 동기화를 유지합니다.
            나는 = matcherOut.length;
            동안(나는--) {
                if ((요소 = matcherOut[i]) &&
                    (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

                    시드[임시] = !(결과[임시] = 요소);
                }
            }
        }

        // 정의된 경우 postFinder를 통해 결과에 요소 추가
    } 또 다른 {
        matcherOut = 압축(
            matcherOut === 결과 ?
                matcherOut.splice(기존, matcherOut.length) :
                매처아웃
        );
        if (postFinder) {
            postFinder(null, 결과, matcherOut, xml);
        } 또 다른 {
            push.apply(결과, matcherOut);
        }
    }
} );
}

함수 matcherFromTokens(토큰) {
    var checkContext, 매처, j,
        len = 토큰.길이,
        LeadingRelative = Expr.relative[토큰[0].유형],
        implicitRelative = 선두 상대 || 상대[" "],
            나는 = 선도상대 ? 1 : 0,

            // 기본 매처는 최상위 컨텍스트에서 요소에 도달할 수 있도록 합니다.
            matchContext = addCombinator(함수(요소) {
                요소를 반환 === checkContext;
}, implicitRelative, true ),
matchAnyContext = addCombinator(함수(요소) {
    반환 indexOf(checkContext, elem) > -1;
		}, implicitRelative, true ),
일치자 = [function (요소, 컨텍스트, xml) {
    var ret = (!leadingRelative && (xml || 컨텍스트 !== outermostContext)) || (
        (checkContext = 컨텍스트).nodeType ?
            matchContext(요소, 컨텍스트, xml) :
            matchAnyContext(요소, 컨텍스트, xml));

    // 요소에 매달리는 것을 피하십시오(문제 #299)
    checkContext = 널;
			리턴 렛;
}];

( ; 나는 < len; 나는++ ) {
    if ((matcher = Expr.relative[토큰[i].type])) {
        matchers = [addCombinator(elementMatcher(matchers), matcher)];
    } 또 다른 {
        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

        // 위치 매처가 보이면 스페셜을 반환합니다.
        if (매처[expando]) {

            // 적절한 처리를 위해 다음 상대 연산자(있는 경우)를 찾습니다.
            j = ++i;
            ( ; j < len; j++ ) {
                if (Expr.relative[토큰[j].type]) {
                    부서지다;
                }
            }
            setMatcher(
                i > 1 && elementMatcher(매처),
                i > 1 && toSelector(

                    // 앞의 토큰이 자손 결합자인 경우 암시적 any-element `*`를 삽입합니다.
                    토큰
                        .슬라이스(0, i - 1)
                        .concat({ 값: 토큰[i - 2].type === " " ? "*" : "" })
                ).replace(rtrim, "$1"),
                일치자,
                i < j && matcherFromTokens(tokens.slice(i, j)),
                j < len && matcherFromTokens((토큰 = tokens.slice(j))),
                j < len && toSelector(토큰)
            );
        }
        matchers.push(매처);
    }
}

	반환 elementMatcher(매처);
}

기능 matcherFromGroupMatchers(elementMatchers, setMatchers) {
    var bySet = setMatchers.length > 0,
        byElement = elementMatchers.length > 0,
        superMatcher = function (시드, 컨텍스트, xml, 결과, 가장 바깥쪽) {
            var 요소, j, 매처,
                일치 개수 = 0,
                나는 = "0",
                일치하지 않음 = 시드 && [],
                setMatched = [],
                contextBackup = 외부 컨텍스트,

                // 항상 시드 요소 또는 가장 바깥쪽 컨텍스트가 있어야 합니다.
                요소 = 씨앗 || byElement && Expr.find["TAG"]("*", 가장 바깥쪽),

                // 이것이 가장 바깥쪽 일치자인 경우 정수 디렉토리를 사용합니다.
                dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                len = elems.length;

            if (가장 바깥쪽) {

                // 지원: IE 11+, Edge 17 - 18+
                // IE/Edge는 엄격한 비교 시 "권한 거부됨" 오류가 발생하는 경우가 있습니다.
                // 두 개의 문서; 얕은 비교가 작동합니다.
                // eslint-disable-next-line eqeqeq
                outermostContext = 컨텍스트 == 문서 || 문맥 || 가장 바깥쪽;
            }

            // elementMatchers를 결과에 직접 전달하는 요소 추가
            // 지원: IE<9, 사파리
            // NodeList 속성(IE: "length"; Safari: <number>)과 일치하는 요소를 ID로 허용
            for (; i !== len && (elem = elems[i]) != null; i++) {
                if (byElement && 요소) {
                    j = 0;

                    // 지원: IE 11+, Edge 17 - 18+
                    // IE/Edge는 엄격한 비교 시 "권한 거부됨" 오류가 발생하는 경우가 있습니다.
                    // 두 개의 문서; 얕은 비교가 작동합니다.
                    // eslint-disable-next-line eqeqeq
                    if (!context && elem.ownerDocument != 문서) {
                        세트문서(요소);
                        xml = !문서가 HTML;
                    }
                    동안((매처 = elementMatchers[j++])) {
                        if (matcher(요소, 컨텍스트 || 문서, xml)) {
                            결과.푸시(요소);
                            부서지다;
                        }
                    }
                    if (가장 바깥쪽) {
                        디렉토리 = 디렉토리 고유;
                    }
                }

                // 세트 필터에 대해 일치하지 않는 요소 추적
                if (bySet) {

                    // 가능한 모든 일치 항목을 거쳤을 것입니다.
                    if ((요소 = !매처 && 요소)) {
                        matchCount--;
                    }

                    // 일치 여부에 관계없이 모든 요소에 대해 배열을 늘립니다.
                    if (씨앗) {
						일치하지 않는.푸시(요소);
                    }
                }
            }

            // `i`는 이제 위에서 방문한 요소의 수이며 `matchedCount`에 추가합니다.
            // 후자를 음이 아닌 것으로 만듭니다.
            matchCount += 나;

            // 일치하지 않는 요소에 설정된 필터 적용
            // 참고: 일치하지 않는 요소가 없으면 건너뛸 수 있습니다(예: `matchedCount`
            // 같음), 위 루프에서 _any_ 요소를 방문하지 않은 경우
            // 요소 매처와 시드가 없습니다.
            // 초기 문자열 "0"을 증가시키는 `i`는 `i`가 그 안에서만 문자열로 남도록 허용합니다.
            // 이 경우 `i`와 다르지만 "00" `matchedCount`가 됩니다.
            // 수치적으로 0입니다.
            if (bySet && i !== matchingCount) {
                j = 0;
                동안((매처 = setMatchers[j++])) {
                    matcher(일치하지 않음, setMatched, 컨텍스트, xml);
                }

                if (씨앗) {

                    // 정렬의 필요성을 제거하기 위해 일치하는 요소를 다시 통합합니다.
                    if (matchedCount > 0) {
                        동안(나는--) {
                            if (!(일치하지 않는[i] || setMatched[i] ) ) {
                                setMatched[i] = pop.call(결과);
                            }
                        }
                    }

                    // 실제 일치 항목만 가져오기 위해 인덱스 자리 표시자 값을 버립니다.
                    setMatched = 압축(setMatched);
                }

                // 결과에 일치 항목 추가
                push.apply(결과, setMatched);

                // 시드가 없는 세트 매치는 성공한 여러 매치에 이어 정렬을 규정합니다.
                if (가장 바깥쪽 && !seed && setMatched.length > 0 &&
                    (matchedCount + setMatchers.length) > 1 ) {

                    Sizzle.uniqueSort(결과);
                }
            }

            // 중첩된 매처에 의한 전역 조작 재정의
            if (가장 바깥쪽) {
                디렉토리 = 디렉토리 고유;
				외부 컨텍스트 = 컨텍스트 백업;
            }

			타의 추종을 불허하는 반환;
        };

	반환 bySet ?
        markFunction(슈퍼매처) :
        슈퍼매처;
}

compile = Sizzle.compile = function (selector, match /* 내부 전용 */) {
    var 나는,
        setMatchers = [],
        elementMatchers = [],
        캐시된 = 컴파일러캐시[선택기 + " "];

    만약(!캐시) {

        // 각 요소를 확인하는 데 사용할 수 있는 재귀 함수의 함수 생성
        만약(!일치) {
            일치 = 토큰화(선택기);
        }
        나는 = 일치.길이;
        동안(나는--) {
            캐시된 = matcherFromTokens(match[i]);
            if (캐시된[expando]) {
                setMatchers.push(캐시됨);
            } 또 다른 {
                elementMatchers.push(캐시됨);
            }
        }

        // 컴파일된 함수를 캐시
        캐시된 = 컴파일러캐시(
            선택자,
            matcherFromGroupMatchers(elementMatchers, setMatchers)
        );

        // 셀렉터 및 토큰화 저장
        cached.selector = 선택기;
    }
	캐시된 반환
};

/**
 * Sizzle의 컴파일된 것과 함께 작동하는 저수준 선택 기능
 * 선택기 기능
 * @param {String|Function} 선택기 선택기 또는 미리 컴파일된
 * Sizzle.compile로 만든 선택기 기능
 * @param {요소} 컨텍스트
 * @param {배열} [결과]
 * @param {Array} [seed] 일치시킬 요소 집합
 */
select = Sizzle.select = function (선택기, 컨텍스트, 결과, 시드) {
    var i, 토큰, 토큰, 유형, 찾기,
        컴파일된 = typeof 선택기 === "함수" && 선택기,
        match = !seed && tokenize((선택기 = 컴파일된 선택기 || 선택기) );

    결과 = 결과 || [];

    // 목록에 선택자가 하나만 있고 시드가 없는 경우 작업을 최소화하려고 시도합니다.
    // (후자는 컨텍스트를 보장함)
    if (match.length === 1) {

        // 선행 복합 선택자가 ID인 경우 컨텍스트를 줄입니다.
        토큰 = match[0] = match[0].slice(0);
        if (tokens.length > 2 && (토큰 = 토큰[0])).type === "ID" &&
            context.nodeType === 9 && documentIsHTML && Expr.relative[토큰[1].type] ) {

            컨텍스트 = (Expr.find["ID"](token.matches[0]
                .replace(runescape, funescape), 컨텍스트) || [])[0];
            if (!context) {
				반환 결과;

                // 미리 컴파일된 매처는 여전히 조상을 확인하므로 레벨을 올리십시오.
            } else if (컴파일된) {
                컨텍스트 = 컨텍스트.부모노드;
            }

            선택기 = selector.slice(tokens.shift().value.length);
        }

        // 오른쪽에서 왼쪽으로 일치하는 시드 세트를 가져옵니다.
        i = matchExpr["needsContext"].test(선택기) ? 0 : 토큰.길이;
        동안(나는--) {
            토큰 = 토큰[i];

            // 결합자를 적중하면 중단
            if (Expr.relative[(유형 = 토큰.유형)]) {
                부서지다;
            }
            if ((찾기 = Expr.find[유형])) {

                // 선행 형제 결합자에 대한 검색, 확장 컨텍스트
                if ((시드 = 찾기(
                    token.matches[0].replace(runescape, funescape),
                    rsibling.test(토큰[0].type) && testContext(context.parentNode) ||
                    문맥
                ))) {

                    // 시드가 비어 있거나 토큰이 남아 있지 않으면 일찍 반환할 수 있습니다.
                    tokens.splice(나는, 1);
                    선택기 = seed.length && toSelector(토큰);
                    if (!선택기) {
                        push.apply(결과, 시드);
						반환 결과;
                    }

                    부서지다;
                }
            }
        }
    }

    // 필터링 함수가 제공되지 않은 경우 컴파일 및 실행
    // 위의 선택기를 수정한 경우 재토큰화를 피하기 위해 `match`를 제공합니다.
    (컴파일된 || compile(선택기, 일치))(
        씨앗,
        문맥,
        !문서는HTML,
        결과,
        !문맥 || rsibling.test(선택기) && testContext(context.parentNode) || 문맥
    );
	반환 결과;
};

// 일회성 할당

// 정렬 안정성
support.sortStable = expando.split("").sort(sortOrder).join("") === 확장;

// 지원: 크롬 14-35+
// 비교 함수에 전달되지 않은 경우 항상 중복을 가정합니다.
support.detectDuplicates = !!hasDuplicate;

// 기본 문서에 대해 초기화
세트문서();

// 지원: Webkit<537.32 - Safari 6.0.3/Chrome 25(Chrome 27에서 수정됨)
// 분리된 노드는 *서로*를 혼란스럽게 따릅니다.
support.sortDetached = assert(함수(엘) {

    // 1을 반환해야 하지만 4를 반환합니다(다음)
    return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
});

// 지원: IE<8
// 속성/속성 "보간" 방지
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if (!assert(함수(엘)) {
    el.innerHTML = "<a href='#'></a>";
    return el.firstChild.getAttribute("href") === "#";
} ) ) {
    addHandle("유형|href|높이|폭", function (요소, 이름, isXML) {
        if (!isXML) {
            return elem.getAttribute(이름, 이름.toLowerCase() === "유형" ? 1 : 2);
        }
    });
}

// 지원: IE<9
// getAttribute("value") 대신 defaultValue 사용
if (!support.attributes || !assert(function (el) {
    el.innerHTML = "<입력/>";
    el.firstChild.setAttribute("값", "");
	반환 el.firstChild.getAttribute("값") === "";
})) {
    addHandle("값", function (요소, _이름, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "입력") {
            elem.defaultValue를 반환합니다.
		}
    });
}

// 지원: IE<9
// getAttribute가 거짓일 때 부울을 가져오기 위해 getAttributeNode를 사용합니다.
if (!assert(함수(엘)) {
    return el.getAttribute("disabled") == null;
} ) ) {
    addHandle(부울, 함수(요소, 이름, isXML) {
        var 발;
        if( !isXML) {
            요소[이름]을 반환 === true ? name.toLowerCase() :
                (val = elem.getAttributeNode(name)) && val.specified ?
                    값 :
                    없는;
        }
    });
}

리턴 시즐;

} ) (창문);



jQuery.find = 지글지글;
jQuery.expr = Sizzle.selectors;

// 더 이상 사용되지 않음
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function (요소, 디렉토리, 까지) {
    var 일치 = [],
        자르기 = !== 정의되지 않을 때까지;

    동안((elem = elem[dir]) && elem.nodeType !== 9) {
        if (elem.nodeType === 1) {
            if (자르기 && jQuery(요소).is(까지)) {
                부서지다;
            }
            Matched.push(요소);
        }
    }
	반환 일치;
};


var 형제 = function (n, elem) {
	일치하는 var =[];

    ( ; n; n = n.nextSibling ) {
        if (n.nodeType === 1 && n !== 요소) {
            일치.푸시(n);
        }
    }

	반환 일치;
};


var rneedsContext = jQuery.expr.match.needsContext;



함수 nodeName(요소, 이름) {

    elem.nodeName 반환 && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = (/^<([az][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>( ?:<\/\1>|)$/i);



// 필터와 동일한 기능을 구현하지 않음
function winnow(요소, 한정자, not) {
    if (isFunction(한정자)) {
        jQuery.grep(요소, 함수(요소, i) 반환) {
            return !!qualifier.call(elem, i, elem) !== 아님;
        } );
    }

    // 단일 요소
    if (qualifier.nodeType) {
        jQuery.grep(요소, 함수(요소) 반환) {
            return (요소 === 한정자) !== 아님;
        } );
    }

    // Arraylike 요소(jQuery, arguments, Array)
    if (typeof 한정자 !== "string") {
        jQuery.grep(요소, 함수(요소) 반환) {
            return (indexOf.call(qualifier, elem) > -1) !== 아님;
        } );
    }

    // 단순 선택자와 복합 선택자 모두에 대해 직접 필터링됨
    return jQuery.filter(qualifier, elements, not);
}

jQuery.filter = function (expr, elems, not) {
    var 요소 = 요소[0];

    이면(아니면) {
        expr = ":not(" + expr + ")";
    }

    if (elems.length === 1 && elem.nodeType === 1) {
        jQuery.find.matchesSelector(elem, expr) 반환 ? [요소] : [];
    }

	반환 jQuery.find.matches(expr, jQuery.grep(elems, function (elem) ) {
        elem.nodeType 반환 === 1;
} ) );
};

jQuery.fn.extend({
    찾기: 기능(선택기) {
        var i, ret,
        len = this.length,
        자기 = 이것;

        if( typeof 선택기 !== "문자열") {
    this.pushStack(jQuery(선택기).filter(function () {
        for (나는 = 0; 나는 < len; 나는++) {
            if (jQuery.contains(self[i], this)) {
						true를 반환합니다.
					}
        }
    }));
}

ret = this.pushStack([]);

for (나는 = 0; 나는 < len; 나는++) {
    jQuery.find(선택자, self[i], ret);
}

		반환 len > 1 ? jQuery.uniqueSort(ret) : ret;
	},
필터: 기능(선택기) {
    return this.pushStack(winnow(this, 선택기 || [], false));
},
not: function(선택기) {
    return this.pushStack(winnow(this, 선택기 || [], true));
},
is: function(선택기) {
    반환!!winnow(
        이것,

        // 위치/상대 선택기인 경우 반환된 집합의 구성원 자격을 확인합니다.
        // 따라서 $("p:first").is("p:last")는 두 개의 "p"가 있는 문서에 대해 true를 반환하지 않습니다.
        typeof 선택기 === "문자열" && rneedsContext.test(선택기) ?
            jQuery(선택기) :
            선택기 || [],
        거짓
    ).길이;
}
} );


// jQuery 객체 초기화


// 루트 jQuery(document)에 대한 중심 참조
var rootjQuery,

    // HTML 문자열을 확인하는 간단한 방법
    // location.hash를 통해 XSS를 피하기 위해 <tag>보다 #id를 우선시합니다(#9521).
    // 엄격한 HTML 인식(#11290: <로 시작해야 함)
    // 속도를 위한 간단한 #id 케이스 바로가기
    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

    초기화 = jQuery.fn.init = 함수(선택기, 컨텍스트, 루트) {
        var 일치, 요소;

// 핸들: $(""), $(null), $(undefined), $(false)
if (!선택기) {
			이것을 반환하십시오;
}

// init() 메서드는 대체 rootjQuery를 허용합니다.
// 마이그레이션이 jQuery.sub를 지원할 수 있도록(gh-2101)
루트 = 루트 || 루트제이쿼리;

// HTML 문자열 처리
if (typeof 선택기 === "문자열") {
    if (선택기[0] === "<" &&
        선택기[선택기.길이 - 1] === ">" &&
        selector.length >= 3) {

        // <>로 시작하고 끝나는 문자열이 HTML이라고 가정하고 정규식 검사를 건너뜁니다.
        일치 = [null, 선택자, null];

    } 또 다른 {
        일치 = rquickExpr.exec(선택기);
    }

    // html과 일치하거나 #id에 컨텍스트가 지정되지 않았는지 확인합니다.
    if (match && (match[1] || !context)) {

        // 핸들: $(html) -> $(배열)
        if (일치[1]) {
            컨텍스트 = 컨텍스트 instanceof jQuery ? 컨텍스트[0] : 컨텍스트;

            // 스크립트 실행 옵션은 back-compat에 대해 true입니다.
            // parseHTML이 없으면 의도적으로 오류가 발생하도록 합니다.
            jQuery.merge(이, jQuery.parseHTML(
                일치[1],
                컨텍스트 && context.nodeType ? context.owner 문서 || 컨텍스트: 문서,
                진실
            ));

            // 핸들: $(html, props)
            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(컨텍스트)) {
                for (문맥에서 일치 ) {

                    // 컨텍스트의 속성은 가능한 경우 메서드로 호출됩니다.
                    if (isFunction(this[일치])) {
                        this[match](context[match]);

                        // ...그렇지 않으면 속성으로 설정
                    } 또 다른 {
                        this.attr(일치, 컨텍스트[일치]);
                    }
                }
            }

					이것을 반환하십시오;

            // 핸들: $(#id)
        } 또 다른 {
            요소 = 문서.getElementById(일치[2]);

            if (요소) {

                // 요소를 jQuery 객체에 직접 삽입
                this[0] = 요소;
                this.길이 = 1;
            }
					이것을 반환하십시오;
        }

        // 핸들: $(expr, $(...))
    } else if (!context || context.jquery) {
        return (컨텍스트 || 루트).find(선택기);

        // 핸들: $(expr, 컨텍스트)
        // (다음과 동일합니다: $(context).find(expr)
    } 또 다른 {
        return this.constructor(context).find(selector);
    }

    // 핸들: $(DOMElement)
} else if (selector.nodeType) {
    this[0] = 선택기;
    this.길이 = 1;
			이것을 반환하십시오;

    // 핸들: $(함수)
    // 문서 준비 단축키
} else if (isFunction(선택기)) {
			반환 root.ready !== 정의되지 않음 ?
        root.ready(선택자) :

        // ready가 없으면 즉시 실행
        선택기(제이쿼리);
}

return jQuery.makeArray(선택기, this);
	};

// 나중에 인스턴스화할 수 있도록 초기화 함수에 jQuery 프로토타입을 제공합니다.
init.prototype = jQuery.fn;

// 중앙 참조 초기화
rootjQuery = jQuery(문서);


var rparentsprev = /^(?:부모|이전(?:까지|모두))/,

    // 고유한 집합에서 시작할 때 고유한 집합을 생성하도록 보장하는 메서드
    보장된 고유 = {
        아이들: 사실,
        내용: 사실,
        다음: 사실,
        이전: 사실
    };

jQuery.fn.extend({
    다음이 있습니다: function (target) {
        var 대상 = jQuery(대상, this),
            l = 대상.길이;

        this.filter(function () {
			변수 i = 0;
            ( ; 나는 < 나는; 나는++ ) {
            if (jQuery.contains(this, target[i])) {
					true를 반환합니다.
				}
        }
    } );
	},

	가장 가까운: function(선택자, 컨텍스트) {
		바 커,
        나는 = 0,
        내가 = this.length,
        일치 = [],
        대상 = typeof 선택기 !== "문자열" && jQuery(선택기);

    // _selection_ 컨텍스트가 없기 때문에 위치 선택자는 일치하지 않습니다.
    if (!rneedsContext.test(선택기)) {
        ( ; 나는 < 나는; 나는++ ) {
            for (cur = this[i]; cur && cur !== 컨텍스트; cur = cur.parentNode) {

                // 항상 문서 조각을 건너뜁니다.
                if (cur.nodeType < 11 && (대상 ?
                    target.index(cur) > -1 :

                    // 요소가 아닌 것을 Sizzle에 전달하지 마십시오.
                    cur.nodeType === 1 &&
                    jQuery.find.matchesSelector(cur, 선택기))) {

                    Matched.push(cur);
                    부서지다;
                }
            }
        }
    }

    return this.pushStack(matching.length > 1 ? jQuery.uniqueSort(일치) : 일치);
},

// 집합 내 요소의 위치 결정
인덱스: 함수(요소) {

    // 인수 없음, 부모의 인덱스 반환
    만약(!요소) {
        반환(this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
    }

    // 선택기의 인덱스
    if (요소 유형 === "문자열" ) {
        return indexOf.call(jQuery(elem), this[0]);
    }

		// 원하는 요소의 위치를 ​​찾습니다.
		반환 indexOf.call(이,

        // jQuery 객체를 받으면 첫 번째 요소가 사용됩니다.
        elem.jquery ? 요소[0] : 요소
    );
},

추가: 기능(선택기, 컨텍스트) {
    this.pushStack(
        jQuery.uniqueSort(
            jQuery.merge(this.get(), jQuery(선택기, 컨텍스트))
        )
    );
},

addBack: 기능(선택기) {
    return this.add(선택자 == null ?
        this.prevObject : this.prevObject.filter(선택기)
    );
}
} );

함수 형제(cur, dir) {
    동안((cur = cur[dir]) && cur.nodeType !== 1) { }
	리턴 커;
}

jQuery.each({
    부모: 함수(요소) {
        var 부모 = elem.parentNode;
        부모 && parent.nodeType 반환 !== 11 ? 부모 : null;
	},
부모: 기능(요소) {
    return dir(요소, "parentNode");
},
parentUntil: function(요소, _i, 까지) {
    return dir(elem, "parentNode", 까지);
},
다음: 함수(요소) {
		반환 형제(elem, "nextSibling");
},
이전: 함수(요소) {
		반환 형제(elem, "previousSibling");
},
nextAll: 기능(요소) {
    return dir(요소, "nextSibling");
},
prevAll: 함수(요소) {
    return dir(elem, "previousSibling");
},
nextUntil: function(elem, _i, 까지) {
    return dir(elem, "nextSibling", 까지);
},
prevUntil: function(요소, _i, 까지) {
    return dir(elem, "previousSibling", 까지);
},
형제: function(요소) {
		형제를 반환((elem.parentNode || {}).firstChild, elem);
},
자식: 함수(요소) {
		형제를 반환(elem.firstChild);
},
내용: 함수(요소) {
    if (elem.contentDocument != null &&

        // 지원: IE 11+
        // `data` 속성이 없는 <object> 요소에는 객체가 있습니다.
        // `null` 프로토타입이 있는 `contentDocument`.
        getProto(요소.콘텐츠문서)) {

        elem.contentDocument를 반환합니다.
		}

    // 지원: IE 9 - 11 전용, iOS 7 전용, Android 브라우저 <=4.3 전용
    // 템플릿 요소를 브라우저에서 일반 요소로 처리합니다.
    // 지원하지 않습니다.
    if (nodeName(요소, "템플릿")) {
        요소 = 요소.내용 || 요소;
    }

    jQuery.merge([], elem.childNodes)를 반환합니다.
	}
}, 함수(이름, fn) {
    jQuery.fn[이름] = function (까지, 선택기) {
        var 일치 = jQuery.map(this, fn, until);

        if (name.slice(-5) !== "까지") {
            선택기 = 까지;
        }

        if (선택기 && typeof 선택기 === "문자열") {
            일치 = jQuery.filter(선택기, 일치);
        }

        if (this.length > 1) {

            // 중복 제거
            if (!보장된 고유[이름] ) {
                jQuery.uniqueSort(일치);
            }

            // 상위* 및 사전 파생 상품의 역순
            if (rparentsprev.test(이름)) {
                match.reverse();
            }
        }

        this.pushStack(일치됨)을 반환합니다.
	};
} );
var rnothtmlwhite = (/[^\x20\t\r\n\f]+/g);



// 문자열 형식의 옵션을 객체 형식의 옵션으로 변환
함수 생성 옵션(옵션) {
    var 객체 = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function (_, 플래그) {
        개체[플래그] = 참;
    });
	반환 객체;
}

/*
 * 다음 매개변수를 사용하여 콜백 목록을 만듭니다.
 *
 * options: 방법을 변경할 공백으로 구분된 옵션의 선택적 목록
 * 콜백 목록 동작 또는 보다 전통적인 옵션 객체
 *
 * 기본적으로 콜백 목록은 이벤트 콜백 목록처럼 작동하며
 * 여러 번 "해고".
 *
 * 가능한 옵션:
 *
 * 한 번: 콜백 목록이 한 번만 실행될 수 있도록 합니다(예: Deferred).
 *
 * 메모리: 이전 값을 추적하고 추가된 콜백을 호출합니다.
 * 최신 "기억"으로 목록이 즉시 실행된 후
 * 값(예: Deferred)
 *
 * 고유: 콜백을 한 번만 추가할 수 있도록 합니다(목록에 중복 없음).
 *
 * stopOnFalse: 콜백이 false를 반환할 때 호출 중단
 *
 */
jQuery.Callbacks = 기능(옵션) {

    // 필요한 경우 옵션을 문자열 형식에서 개체 형식으로 변환합니다.
    // (먼저 캐시를 확인합니다)
    옵션 = typeof 옵션 === "문자열" ?
        createOptions(옵션) :
        jQuery.extend({}, 옵션);

    var // 목록이 현재 실행 중인지 알려주는 플래그
        발사,

        // 잊을 수 없는 목록의 마지막 실행 값
        메모리,

        // 목록이 이미 실행되었는지 여부를 알려주는 플래그
        해고,

        // 발사를 방지하기 위한 플래그
        잠긴,

        // 실제 콜백 목록
        목록 = [],

        // 반복 가능한 목록에 대한 실행 데이터 큐
        대기열 = [],

        // 현재 실행 중인 콜백의 인덱스(필요에 따라 추가/제거로 수정됨)
        발사 인덱스 = -1,

        // 호출 콜백
        화재 = 함수() {

            // 단일 실행 적용
            잠긴 = 잠긴 || 옵션.한 번;

    // 보류 중인 모든 실행에 대해 콜백을 실행합니다.
    // fireingIndex 재정의 및 런타임 변경 사항 준수
    발사 = 발사 = 사실;
    for (; queue.length; fireingIndex = -1) {
        메모리 = queue.shift();
        동안(++fireingIndex < list.length) {

            // 콜백 실행 및 조기 종료 확인
            if (list[fireingIndex].apply(memory[0], memory[1]) === false &&
                options.stopOnFalse) {

						// 끝으로 점프하고 데이터를 잊어 버리면 .add가 다시 실행되지 않습니다.
						발사 인덱스 = 목록.길이;
                메모리 = 거짓;
            }
        }
    }

    // 데이터가 끝나면 데이터를 잊어 버리십시오.
    if (!options.memory) {
        메모리 = 거짓;
    }

    발사 = 거짓;

    // 발사가 완료되면 정리합니다.
    만약(잠긴) {

        // 향후 추가 호출에 대한 데이터가 있는 경우 빈 목록을 유지합니다.
        만약(메모리) {
            목록 = [];

            // 그렇지 않으면 이 객체가 소비됩니다.
        } 또 다른 {
            목록 = "";
        }
    }
},

// 실제 콜백 객체
자기 = {

    // 목록에 콜백 또는 콜백 컬렉션 추가
    추가: 함수() {
    if (목록) {

        // 과거 실행의 메모리가 있는 경우 추가한 후 실행해야 합니다.
        if (메모리 && !발사) {
						발사 인덱스 = 목록.길이 - 1;
            queue.push(메모리);
        }

        (함수 추가(인수) {
            jQuery.each(인수, 함수(_, 인수) {
                if(isFunction(인수)) {
                if (!options.unique || !self.has(arg)) {
                    목록.푸시(인수);
                }
            } else if (arg && arg.length && toType(arg) !== "문자열") {

                // 재귀적으로 검사
                추가(인수);
            }
        } );
    } ) (인수);

    if (메모리 && !발사) {
        불();
    }
}
				이것을 반환하십시오;
			},

// 목록에서 콜백 제거
제거: function() {
    jQuery.each(인수, 함수(_, 인수) {
        변수 인덱스;
        동안( (인덱스 = jQuery.inArray(인수, 목록, 인덱스)) > -1) {
        list.splice(인덱스, 1);

        // 실행 인덱스 처리
        if (인덱스 <= 파이어링 인덱스 ) {
							발사 인덱스--;
        }
    }
} );
				이것을 반환하십시오;
			},

// 주어진 콜백이 목록에 있는지 확인합니다.
// 인수가 주어지지 않으면 목록에 콜백이 첨부되었는지 여부를 반환합니다.
가지고: 기능(fn) {
				리턴 fn ?
        jQuery.inArray(fn, list) > -1 :
        목록 길이 > 0;
},

			// 목록에서 모든 콜백 제거
			비어 있음: 함수() {
    if (목록) {
        목록 = [];
    }
				이것을 반환하십시오;
},

// .fire 및 .add 비활성화
// 현재/보류 중인 모든 실행을 중단합니다.
// 모든 콜백 및 값 지우기
비활성화: 기능() {
    잠김 = 대기열 = [];
    목록 = 메모리 = "";
				이것을 반환하십시오;
},
비활성화됨: function() {
    반환!목록;
},

// .fire 비활성화
// 메모리가 없으면 .add도 비활성화합니다(효과가 없기 때문에).
// 보류 중인 모든 실행을 중단합니다.
잠금: 함수() {
    잠김 = 대기열 = [];
    if (!memory && !fireing) {
        목록 = 메모리 = "";
    }
				이것을 반환하십시오;
},
잠김: function() {
    반환!!잠김;
},

// 주어진 컨텍스트와 인수로 모든 콜백을 호출합니다.
fireWith: function(컨텍스트, 인수) {
    if (!locked) {
        인수 = 인수 || [];
        args = [컨텍스트, args.slice ? args.slice() : args];
        queue.push(인수);
        if (!발사) {
            불();
        }
    }
				이것을 반환하십시오;
},

// 주어진 인수로 모든 콜백을 호출합니다.
화재: 함수() {
    self.fireWith(this, arguments);
				이것을 반환하십시오;
},

// 콜백이 이미 한 번 이상 호출되었는지 확인
해고: function() {
    반환!!해고;
}
		};

	자기 반환;
};


함수 아이덴티티(v) {
	리턴 v;
}
함수 던지는 사람(예) {
	예를 던지다;
}

기능 채택값(값, 해결, 거부, 값 없음) {
    var 메소드;

	노력하다 {

        // 권한 동기 동작에 대한 약속 측면을 먼저 확인합니다.
        if (값 && isFunction((메소드 = value.promise))) {
            method.call(값).done(해결).fail(거부);

            // 기타 테너블
        } else if (값 && isFunction((메소드 = value.then))) {
            method.call(값, 해결, 거부);

            // 기타 non-thenable
        } 또 다른 {

            // Array#slice가 부울 `noValue`를 정수로 캐스팅하도록 하여 `resolve` 인수를 제어합니다.
            // * 거짓: [ value ].slice( 0 ) => resolve( value )
            // * 참: [ 값 ].slice( 1 ) => 해결()
            resolve.apply(정의되지 않음, [값].slice(noValue));
        }

        // Promises/A+의 경우 예외를 거부로 변환
        // jQuery.when은 thenables를 unwrap하지 않기 때문에 다음에 나타나는 추가 검사를 건너뛸 수 있습니다.
        // Deferred#then to conditionally suppress rejection.
    } catch (value) {

        // Support: Android 4.0 only
        // Strict mode functions invoked without .call/.apply get global-object context
        reject.apply(undefined, [value]);
    }
}

jQuery.extend({

    Deferred: function (func) {
        var tuples = [

            // action, add listener, callbacks,
            // ... .then handlers, argument index, [final state]
            ["notify", "progress", jQuery.Callbacks("memory"),
                jQuery.Callbacks("memory"), 2],
            ["resolve", "done", jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", jQuery.Callbacks("once memory"),
                jQuery.Callbacks("한 번 메모리"), 1, "거부됨"]
        ],
            상태 = "보류 중",
            약속 = {
                상태: 함수() {
                    반환 상태;
    },
    항상: function () {
        deferred.done(인수).fail(인수);
					이것을 반환하십시오;
    },
    "캐치": 함수(fn) {
    반환 약속.then(null, fn);
},

    // 역호환을 위해 파이프 유지
    파이프: 함수( /* fnDone, fnFail, fnProgress */) {
    var fns = 인수;

    반환 jQuery.Deferred(function (newDefer) {
        jQuery.each(튜플, 함수(_i, 튜플) {

            // 튜플(진행, 완료, 실패)을 인수(완료, 실패, 진행)에 매핑합니다.
            var fn = isFunction(fns[튜플[4]]) && fns[튜플[4]];

            // deferred.progress(function() { newDefer 또는 newDefer.notify에 바인딩 })
            // deferred.done(function() { newDefer 또는 newDefer.resolve에 바인딩 })
            // deferred.fail(function() { newDefer 또는 newDefer.reject에 바인딩 })
            지연[튜플[1]](함수() {
                var 반환 = fn && fn.apply(this, arguments);
                if(반환된 && isFunction(반환된.약속)) {
            반환된.약속()
                .progress(newDefer.notify)
                .done(newDefer.resolve)
                .fail(newDefer.reject);
        } 또 다른 {
            newDefer[튜플[0] + "포함"](
                이것,
                에프엔 ? [반환된] : 인수
            );
        }
    });
});
fns = 널;
					} ).약속하다();
				},
다음: function(onFulfilled, onRejected, onProgress) {
					변수 최대 깊이 = 0;
    function resolve(깊이, 지연, 핸들러, 특수) {
						반환 함수() {
            var that = this,
                인수 = 인수,
                MightThrow = 함수() {
                    var가 반환되면;

            // 지원: Promise/A+ 섹션 2.3.3.3.3
            // https://promisesaplus.com/#point-59
            // 이중 해상도 시도 무시
            if (깊이 < maxDepth) {
                반품;
            }

            반환된 = handler.apply(그것, args);

            // 지원: Promise/A+ 섹션 2.3.1
            // https://promisesaplus.com/#point-48
            if (반환 === deferred.promise()) {
                throw new TypeError("Thenable self-resolution");
            }

            // 지원: Promise/A+ 섹션 2.3.3.1, 3.5
            // https://promisesaplus.com/#point-54
            // https://promisesaplus.com/#point-75
            // 'then'을 한 번만 검색합니다.
            then = 반환된 &&

                // 지원: Promise/A+ 섹션 2.3.4
                // https://promisesaplus.com/#point-64
                // thenability를 위해 객체와 함수만 확인합니다.
                (반환된 typeof === "객체" ||
                    반환된 typeof === "함수" ) &&
                        반환.그때;

            // 반환된 thenable 처리
            if (isFunction(그때)) {

                // 특수 프로세서(알림)는 해결을 기다립니다.
                if (특수) {
                    then.call(
                        반환,
                        해결(maxDepth, 지연, ID, 특수),
                        resolve(maxDepth, deferred, Thrower, 특수)
                    );

                    // 일반 프로세서(resolve)도 진행에 연결됩니다.
                } 또 다른 {

											// ...그리고 이전 해상도 값은 무시합니다.
											최대 깊이++;

                    then.call(
                        반환,
                        해결(maxDepth, 지연, ID, 특수),
                        해결(maxDepth, 지연, 던지기, 특수),
                        resolve(maxDepth, 지연, ID,
                            deferred.notifyWith)
                    );
                }

                // 다른 모든 반환 값 처리
            } 또 다른 {

                // 대체 핸들러만 컨텍스트를 전달합니다.
                // 및 여러 값(비사양 동작)
                if (핸들러 !== ID) {
                    그 = 정의되지 않음;
                    인수 = [반환됨];
                }

                // 값 처리
                // 기본 프로세스는 resolve
                (특수 || deferred.resolveWith)(즉, args);
            }
        },

        // 일반 프로세서(해결)만 예외를 catch하고 거부합니다.
        프로세스 = 특수 ?
            강타 :
            기능() {
										노력하다 {
                강타();
            } 잡기(e) {

                if (jQuery.Deferred.exceptionHook) {
                    jQuery.Deferred.exceptionHook(전자,
                        프로세스.stackTrace);
                }

                // 지원: Promise/A+ 섹션 2.3.3.3.4.1
                // https://promisesaplus.com/#point-61
                // 사후 해결 예외를 무시합니다.
                if (깊이 + 1 >= maxDepth) {

                    // 대체 핸들러만 컨텍스트를 전달합니다.
                    // 및 여러 값(비사양 동작)
                    if (핸들러 !== 던지는 사람 ) {
                        그 = 정의되지 않음;
                        인수 = [e];
                    }

                    deferred.rejectWith(그것, args);
                }
            }
        };

        // 지원: Promise/A+ 섹션 2.3.3.3.1
        // https://promisesaplus.com/#point-57
        // 잘못된 거부를 피하기 위해 즉시 약속을 다시 해결합니다.
        // 후속 오류
        만약(깊이) {
            프로세스();
        } 또 다른 {

            // 예외의 경우 스택을 기록하기 위해 선택적 후크를 호출합니다.
            // 실행이 비동기화되면 손실되기 때문에
            if (jQuery.Deferred.getStackHook) {
                process.stackTrace = jQuery.Deferred.getStackHook();
            }
            window.setTimeout(프로세스);
        }
    };
}

					반환 jQuery.Deferred(function (newDefer) {

    // progress_handlers.add( ... )
    튜플[0][3].add(
        해결하다(
            0,
            새로운 연기,
            isFunction(onProgress) ?
                진행 중 :
            신원,
            newDefer.notifyWith
        )
    );

    // fulfilled_handlers.add( ... )
    튜플[1][3].add(
        해결하다(
            0,
            새로운 연기,
            isFunction(onFulfilled) ?
                onFulfilled :
                신원
        )
    );

    // 거부된_handlers.add( ... )
    튜플[2][3].add(
        해결하다(
            0,
            새로운 연기,
            isFunction(onRejected) ?
                거부됨 :
                던지는 사람
        )
    );
}).약속하다();
				},

// 이 지연에 대한 약속을 얻습니다.
// obj가 제공되면 Promise 측면이 객체에 추가됩니다.
약속: function(obj) {
					객체 반환 != null ? jQuery.extend(obj, promise) : 약속;
}
			},
지연 = {};

// 목록별 메소드 추가
jQuery.each(튜플, 함수(i, 튜플) {
    var 목록 = 튜플[2],
    stateString = 튜플[5];

    // promise.progress = list.add
    // promise.done = list.add
    // 약속.실패 = 목록.추가
    약속[튜플[1]] = list.add;

    // 핸들 상태
    if(상태 문자열) {
        list.add(
            기능() {

            // 상태 = "해결됨"(즉, 충족됨)
            // 상태 = "거부됨"
            상태 = 상태 문자열;
        },

            // 거부된_callbacks.disable
            // fulfilled_callbacks.disable
            튜플[3 - i][2].비활성화,

            // 거부된_handlers.disable
            // fulfilled_handlers.disable
            튜플[3 - i][3].비활성화,

            // progress_callbacks.lock
            튜플[0][2].잠금,

            // progress_handlers.lock
            튜플[0][3].lock
        );
    }

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// 거부된_handlers.fire
			list.add(튜플[3].fire);

    // deferred.notify = function() { deferred.notifyWith(...) }
    // deferred.resolve = function() { deferred.resolveWith(...) }
    // deferred.reject = function() { deferred.rejectWith(...) }
    지연[튜플[0]] = 함수() {
        deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
				이것을 반환하십시오;
			};

// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
deferred[tuple[0] + "함께"] = list.fireWith;
		} );

// 지연된 약속을 만듭니다.
약속.약속(지연);

// 주어진 함수가 있으면 호출
if (함수) {
    func.call(지연, 연기);
}

		// 모두 완료되었습니다!
		반환 연기;
	},

// 지연된 도우미
언제: function(singleValue) {
    var

        // 완료되지 않은 부하의 수
        나머지 = 인수.길이,

        // 처리되지 않은 인수의 수
        나는 = 나머지,

        // 하위 이행 데이터
        resolveContexts = 배열(i),
        resolveValues = slice.call(인수),

        // 기본 지연
        기본 = jQuery.Deferred(),

        // 하위 콜백 팩토리
        updateFunc = 기능(나는) {
            반환 함수(값) {
                resolveContexts[나는] = 이것;
                resolveValues[i] = arguments.length > 1 ? slice.call(인수) : 값;
                if (!(--남음)) {
                    primary.resolveWith(resolveContexts, resolveValues);
                }
            };
};

// 단일 및 빈 인수는 Promise.resolve와 같이 채택됩니다.
if (나머지 <= 1) {
    채택값(singleValue, 기본.done(updateFunc(i)).resolve, 기본.거부,
        !남음);

    // .then()을 사용하여 보조 thenable의 래핑을 해제합니다(cf. gh-3000).
    if (primary.state() === "보류 중" ||
        isFunction(resolveValues[i] && resolveValues[i].then)) {

				반환 기본.then();
    }
}

// 여러 인수는 Promise.all 배열 요소처럼 집계됩니다.
동안(나는--) {
    채택값(resolveValues[i], updateFunc(i), primary.reject);
}

		반환 primary.promise();
	}
} );


// 이것은 일반적으로 개발 중 프로그래머의 실수를 나타냅니다.
// 기본적으로 삼키지 않고 최대한 빨리 경고합니다.
var rerrorNames = /^(평가|내부|범위|참조|구문|유형|URI)오류$/;

jQuery.Deferred.exceptionHook = 함수(오류, 스택) {

    // 지원: IE 8 - 9 전용
    // 콘솔은 개발 도구가 열려 있을 때 존재하며 이는 언제든지 발생할 수 있습니다.
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
        window.console.warn("jQuery.Deferred 예외: " + error.message, error.stack, stack);
    }
};




jQuery.readyException = 함수(오류) {
    window.setTimeout(함수() {
        오류를 던지다;
    });
};




// DOM 준비에 사용되는 지연됨
var readyList = jQuery.Deferred();

jQuery.fn.ready = 기능(fn) {

	준비 목록
        .그때(fn)

        // 조회가 가능하도록 jQuery.readyException을 함수에 래핑합니다.
        // 콜백 대신 오류 처리 시 발생
        // 등록.
        .catch(함수(오류) {
            jQuery.readyException(오류);
        });

	이것을 반환하십시오;
};

jQuery.extend({

    // DOM을 사용할 준비가 되었습니까? 발생하면 true로 설정합니다.
    isReady: 거짓,

    // 얼마나 많은 항목을 기다려야 하는지 추적하는 카운터
    // 준비 이벤트가 발생합니다. #6781 참조
    준비대기: 1,

    // DOM이 준비되었을 때 처리
    준비: 기능(대기) {

        // 보류 중인 보류가 있거나 이미 준비된 경우 중단
        if(wait === true ? --jQuery.readyWait : jQuery.isReady) {
    반품;
}

// DOM이 준비되었음을 기억하십시오.
jQuery.isReady = 참;

// 일반 DOM Ready 이벤트가 발생하면 감소하고 필요한 경우 기다립니다.
if (기다림 !== true && --jQuery.readyWait > 0) {
    반품;
}

// 바인딩된 함수가 있는 경우 실행
readyList.resolveWith(문서, [jQuery]);
	}
} );

jQuery.ready.then = readyList.then;

// 준비된 이벤트 핸들러 및 자체 정리 메소드
함수 완료() {
    document.removeEventListener("DOMContentLoaded", 완료됨);
    window.removeEventListener("로드", 완료됨);
    jQuery.ready();
}

// $(document).ready()가 호출되는 경우를 포착
// 브라우저 이벤트가 이미 발생한 후.
// 지원: IE <=9 - 10 전용
// 이전 IE는 때때로 너무 빨리 "대화형" 신호를 보냅니다.
if (document.readyState === "완료" ||
    (document.readyState !== "로드 중" && !document.documentElement.doScroll)) {

    // 스크립트가 준비를 지연할 수 있도록 비동기식으로 처리합니다.
    window.setTimeout(jQuery.ready);

} 또 다른 {

    // 편리한 이벤트 콜백 사용
    document.addEventListener("DOMContentLoaded", 완료됨);

    // 항상 작동하는 window.onload로의 폴백
    window.addEventListener("로드", 완료됨);
}




// 컬렉션의 값을 가져오고 설정하는 다기능 메서드
// 값은 함수인 경우 선택적으로 실행할 수 있습니다.
var 액세스 = function (요소, fn, 키, 값, 연결 가능, emptyGet, 원시) {
	변수 i = 0,
        len = elems.length,
        대량 = 키 == null;

    // 많은 값을 설정
    if (toType(키) === "객체") {
		연결 가능 = true;
        (키의 i ) {
            액세스(요소, fn, i, 키[i], true, emptyGet, 원시);
        }

        // 하나의 값을 설정
    } else if (값 !== 정의되지 않음 ) {
		연결 가능 = true;

        if (!isFunction(값)) {
            원시 = 사실;
        }

        경우(대량) {

            // 일괄 작업은 전체 집합에 대해 실행됩니다.
            경우(원시) {
                fn.call(요소, 값);
                fn = 널;

                // ...함수 값을 실행할 때 제외
            } 또 다른 {
                벌크 = fn;
                fn = 기능(요소, _키, 값) {
                    return bulk.call(jQuery(요소), 값);
                };
            }
        }

        경우(fn) {
            ( ; 나는 < len; 나는++ ) {
                fn(
                    요소[i], 키, 원시 ?
                    값 :
                    value.call(elems[i], i, fn(elems[i], 키))
                );
            }
        }
    }

    if (체인 가능 ) {
		반환 요소;
    }

    // 가져오기
    경우(대량) {
		반환 fn.call(요소);
    }

	반환 렌 ? fn(elems[0], 키) : emptyGet;
};


// 카멜화를 위해 대시 문자열과 일치합니다.
var rmsPrefix = /^-ms-/,
    rdashAlpha = /-([az])/g;

// camelCase에서 replace()에 대한 콜백으로 사용
함수 fcamelCase(_all, 문자) {
	문자를 반환합니다.toUpperCase();
}

// 대시를 camelCase로 변환합니다. CSS 및 데이터 모듈에서 사용
// 지원: IE <=9 - 11, 에지 12 - 15
// Microsoft는 공급업체 접두사를 험프하는 것을 잊었습니다(#9572).
기능 camelCase(문자열) {
    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
}
var 수락 데이터 = 기능(소유자) {

    // 다음만 허용:
    // - 노드
    // - Node.ELEMENT_NODE
    // - Node.DOCUMENT_NODE
    // - 물체
    // - 어느
    반환 소유자.노드 유형 === 1 || 소유자.노드 유형 === 9 || !(+소유자.노드타입);
};




함수 데이터() {
    this.expando = jQuery.expando + Data.uid++;
}

데이터.uid = 1;

데이터 프로토타입 = {

    캐시: 기능(소유자) {

    // 소유자 객체에 이미 캐시가 있는지 확인
    var 값 = 소유자[this.expando];

    // 없으면 생성
    만약(!값) {
        값 = {};

        // 최신 브라우저에서 요소가 아닌 노드에 대한 데이터를 수락할 수 있습니다.
        // 하지만 그렇게 해서는 안 됩니다. #8335를 참조하세요.
        // 항상 빈 객체를 반환합니다.
        if (acceptData(소유자)) {

            // 문자열화되거나 반복될 가능성이 없는 노드인 경우
            // 일반 할당 사용
            if (소유자.노드타입) {
                소유자[this.expando] = 값;

                // 그렇지 않으면 열거할 수 없는 속성으로 보호합니다.
                // configurable은 속성을 허용하려면 true여야 합니다.
                // 데이터 삭제 시 삭제
            } 또 다른 {
                Object.defineProperty(소유자, this.expando, {
                    가치: 가치,
                    구성 가능: 참
                });
            }
        }
    }

		반환 값;
},
집합: 함수(소유자, 데이터, 값) {
		변수 소품,
        캐시 = this.cache(소유자);

    // 핸들: [ 소유자, 키, 값 ] 인수
    // 항상 camelCase 키 사용(gh-2257)
    if (데이터 유형 === "문자열" ) {
        캐시[낙타 케이스(데이터) ] = 값;

        // 핸들: [ 소유자, { 속성 } ] 인수
    } 또 다른 {

        // 속성을 하나씩 캐시 객체에 복사합니다.
        (데이터의 소품 ) {
            캐시[낙타 케이스(소품) ] = 데이터[소품];
        }
    }
		반환 캐시;
},
가져오기: 함수(소유자, 키) {
		리턴 키 === 정의되지 않음 ?
        this.cache(소유자) :

        // 항상 camelCase 키 사용(gh-2257)
        소유자[this.expando] && 소유자[this.expando][camelCase(키)];
},
액세스: 기능(소유자, 키, 값) {

    // 다음 중 하나에 해당하는 경우:
    // //
    // 1. 키가 지정되지 않았습니다.
    // 2. 문자열 키가 지정되었지만 값이 제공되지 않았습니다.
    // //
    // "읽기" 경로를 취하고 get 메소드가 결정할 수 있도록 합니다.
    // 반환할 값은 다음 중 하나입니다.
    // //
    // 1. 전체 캐시 객체
    // 2. 키에 저장된 데이터
    // //
    if (키 === 정의되지 않음 ||
        ((키 && typeof 키 === "문자열") && 값 === 정의되지 않음 ) ) {

        return this.get(소유자, 키);
    }

    // 키가 문자열이 아니거나 키와 값이 모두 아닌 경우
    // 다음 중 하나로 지정, 설정 또는 확장(기존 객체):
    // //
    // 1. 속성의 객체
    // 2. 키와 값
    // //
    this.set(소유자, 키, 값);

		// "set" 경로는 두 개의 가능한 진입점을 가질 수 있기 때문에
		// 어떤 경로를 선택했는지에 따라 예상되는 데이터를 반환합니다[*]
		반환 값 !== 정의되지 않음 ? 값 : 키;
},
제거: 기능(소유자, 키) {
    var 나는,
        캐시 = 소유자[this.expando];

    if (캐시 === 정의되지 않음 ) {
        반품;
    }

    if (키 !== 정의되지 않음 ) {

        // 배열 또는 공백으로 구분된 키 문자열 지원
        if (Array.isArray(키)) {

            // 키가 키의 배열인 경우...
            // 우리는 항상 camelCase 키를 설정하므로 제거합니다.
            키 = key.map(낙타 케이스);
        } 또 다른 {
            키 = 낙타 케이스(키);

            // 공백이 있는 키가 있으면 사용합니다.
            // 그렇지 않으면 공백이 아닌 것을 일치시켜 배열을 만듭니다.
            키 = 캐시의 키 ?
                [열쇠] :
                (key.match(rnothtmlwhite) || []);
        }

        나는 = 키.길이;

        동안(나는--) {
				캐시 삭제[키[i]];
        }
    }

    // 더 이상 데이터가 없으면 expando를 제거합니다.
    if (키 === 정의되지 않음 || jQuery.isEmptyObject(캐시) ) {

        // 지원: 크롬 <=35 - 45
        // 속성 삭제 시 Webkit & Blink 성능 저하
        // DOM 노드에서, 그래서 대신 undefined로 설정
        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607(버그 제한)
        if (소유자.노드타입) {
            소유자[this.expando] = 정의되지 않음;
        } 또 다른 {
				소유자 삭제[this.expando];
        }
    }
},
hasData: 함수(소유자) {
    var 캐시 = 소유자[this.expando];
		캐시 반환 !== 정의되지 않음 && !jQuery.isEmptyObject(캐시);
}
};
var dataPriv = 새로운 데이터();

var dataUser = 새로운 데이터();



// 구현 요약
// //
// 1. 1.9.x 분기와 API 표면 및 의미론적 호환성을 적용합니다.
// 2. 스토리지를 줄여 모듈의 유지보수성을 향상시킨다.
// 단일 메커니즘에 대한 경로.
// 3. 동일한 단일 메커니즘을 사용하여 "개인" 및 "사용자" 데이터를 지원합니다.
// 4. _Never_ 사용자 코드에 "비공개" 데이터를 노출하지 않습니다. (TODO: Drop _data, _removeData)
// 5. 사용자 개체에 대한 구현 세부 정보 노출 방지(예: expando 속성)
// 6. 2014년 WeakMap 구현 업그레이드를 위한 명확한 경로 제공

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    rmultiDash = /[AZ]/g;

함수 getData(데이터) {
    if (데이터 === "true") {
		true를 반환합니다.
	}

    if (데이터 === "거짓") {
		거짓을 반환합니다.
	}

    if (데이터 === "null") {
		널 반환;
    }

    // 문자열을 변경하지 않는 경우에만 숫자로 변환
    if (데이터 === +데이터 + "") {
        반환 + 데이터;
    }

    if (rbrace.test(데이터)) {
		반환 JSON.parse(데이터);
    }

	데이터 반환;
}

함수 dataAttr(요소, 키, 데이터) {
	변수 이름;

    // 내부에서 아무 것도 발견되지 않으면 아무 것도 가져오려고 시도합니다.
    // HTML5 data-* 속성의 데이터
    if (데이터 === 정의되지 않음 && elem.nodeType === 1 ) {
        이름 = "데이터-" + key.replace(rmultiDash, "-$&").toLowerCase();
        데이터 = elem.getAttribute(이름);

        if (데이터 유형 === "문자열" ) {
			노력하다 {
                데이터 = getData(데이터);
            } 잡기(e) { }

            // 나중에 변경되지 않도록 데이터를 설정했는지 확인합니다.
            dataUser.set(요소, 키, 데이터);
        } 또 다른 {
            데이터 = 정의되지 않음;
        }
    }
	데이터 반환;
}

jQuery.extend({
    hasData: 기능(요소) {
    반환 dataUser.hasData(요소) || dataPriv.hasData(요소);
},

    데이터: 함수(요소, 이름, 데이터) {
    return dataUser.access(요소, 이름, 데이터);
},

    데이터 제거: 함수(요소, 이름) {
    dataUser.remove(요소, 이름);
},

    // TODO: 이제 _data 및 _removeData에 대한 모든 호출이 대체되었습니다.
    // dataPriv 메소드에 대한 직접 호출을 사용하면 더 이상 사용되지 않을 수 있습니다.
    _data: 함수(요소, 이름, 데이터) {
    return dataPriv.access(요소, 이름, 데이터);
},

    _removeData: 함수(요소, 이름) {
    dataPriv.remove(요소, 이름);
}
});

jQuery.fn.extend({
    데이터: 기능(키, 값) {
        변수 i, 이름, 데이터,
        요소 = this[0],
        속성 = elem && elem.attributes;

        // 모든 값 가져오기
        if(키 === 정의되지 않음) {
    if (this.length) {
        데이터 = dataUser.get(요소);

        if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            나는 = 속성.길이;
            동안(나는--) {

                // 지원: IE 11 전용
                // attrs 요소는 null일 수 있습니다. (#14894)
                if (속성[나는]) {
                    이름 = 속성[나는].이름;
                    if (name.indexOf("data-") === 0) {
                        이름 = 낙타 케이스(name.slice(5));
                        dataAttr(요소, 이름, 데이터[이름]);
                    }
                }
            }
            dataPriv.set(요소, "hasDataAttrs", true);
        }
    }

			데이터 반환;
}

// 여러 값 설정
if (typeof 키 === "객체") {
    this.each(function () {
        dataUser.set(this, key);
    });
}

		반환 액세스(this, function (값) {
			변수 데이터;

    // 호출하는 jQuery 객체(요소 일치)가 비어 있지 않습니다.
    // (따라서 요소가 this[ 0 ]에 나타남)
    // `value` 매개변수가 정의되지 않았습니다. 빈 jQuery 객체
    // elem = this[ 0 ]에 대해 `undefined`가 됩니다.
    // 데이터 캐시를 읽으려는 시도가 있으면 예외를 throw합니다.
    if (요소 && 값 === 정의되지 않음 ) {

    // 캐시에서 데이터 가져오기 시도
    // 키는 Data에서 항상 camelCased입니다.
    데이터 = dataUser.get(요소, 키);
    if (데이터 !== 정의되지 않음 ) {
					데이터 반환;
    }

    // 데이터 "발견" 시도
    // HTML5 사용자 정의 데이터-* 속성
    데이터 = dataAttr(요소, 키);
    if (데이터 !== 정의되지 않음 ) {
					데이터 반환;
    }

    // 열심히 노력했지만 데이터가 존재하지 않습니다.
    반품;
}

// 데이터 설정...
this.each(함수() {

    // 우리는 항상 camelCased 키를 저장합니다.
    dataUser.set(this, key, value);
});
		}, null, 값, arguments.length > 1, null, true );
	},

	데이터 제거: 기능(키) {
    this.each(function () {
        dataUser.remove(this, key);
    });
}
} );


jQuery.extend({
    큐: 함수(요소, 유형, 데이터) {
    var 큐;

    if(요소) {
        유형 = (유형 || "fx") + "대기열";
        대기열 = dataPriv.get(요소, 유형);

        // 이것이 단지 조회일 경우 빨리 빠져 나와 대기열에서 빼는 속도를 높입니다.
        만약(데이터) {
            if (!queue || Array.isArray(데이터)) {
                큐 = dataPriv.access(요소, 유형, jQuery.makeArray(데이터));
            } 또 다른 {
                큐.푸시(데이터);
            }
        }
			반환 대기열 || [];
    }
},

    큐에서 빼기: function (요소, 유형) {
        유형 = 유형 || "FX";

        var 큐 = jQuery.queue(요소, 유형),
            시작길이 = queue.length,
            fn = queue.shift(),
            후크 = jQuery._queueHooks(요소, 유형),
            다음 = 함수() {
                jQuery.dequeue(요소, 유형);
    };

// fx 대기열이 대기열에서 제거되면 항상 진행률 센티넬을 제거합니다.
if (fn === "진행") {
    fn = queue.shift();
    시작길이--;
}

경우(fn) {

    // fx 대기열이 생성되는 것을 방지하기 위해 진행률 센티넬을 추가합니다.
    // 자동으로 큐에서 제거
    if (유형 === "fx") {
        queue.unshift("진행 중");
    }

    // 마지막 큐 중지 함수를 지웁니다.
    hooks.stop 삭제;
    fn.call(요소, 다음, 후크);
}

if (!startLength && 후크) {
    hooks.empty.fire();
}
	},

// Not public - queueHooks 객체를 생성하거나 현재 객체를 반환합니다.
_queueHooks: 함수(요소, 유형) {
    var 키 = 유형 + "queueHooks";
		반환 dataPriv.get(요소, 키) || dataPriv.access(요소, 키, {
        비어 있음: jQuery.Callbacks("한 번 메모리").add(function () {
            dataPriv.remove(요소, [유형 + "대기열", 키]);
        })
    });
}
} );

jQuery.fn.extend({
    큐: 함수(유형, 데이터) {
        변수 설정자 = 2;

        if( typeof 유형 !== "문자열") {
    데이터 = 유형;
    유형 = "fx";
    세터--;
}

if (인수.길이 < 설정자) {
    return jQuery.queue(this[0], type);
}

		반환 데이터 === 정의되지 않음 ?
    이것 :
    this.each(함수() {
        var 큐 = jQuery.queue(this, type, data);

        // 이 큐에 대한 후크 확인
        jQuery._queueHooks(this, type);

        if(type === "fx" && queue[0] !== "inprogress") {
    jQuery.dequeue(this, type);
}
			} );
	},
	큐에서 빼기: 함수(유형) {
    this.each(function () {
        jQuery.dequeue(this, type);
    });
},
clearQueue: 함수(유형) {
    return this.queue(type || "fx", []);
},

// 특정 유형의 큐가 있을 때 해결된 프라미스를 가져옵니다.
// 비어 있습니다(fx는 기본적으로 유형입니다)
약속: function(유형, obj) {
    var tmp,
        카운트 = 1,
        연기 = jQuery.Deferred(),
        요소 = 이것,
        나는 = this.length,
        해결 = 함수() {
            if (!(--count)) {
        defer.resolveWith(요소, [요소]);
    }
};

if (typeof 유형 !== "문자열") {
    obj = 유형;
    유형 = 정의되지 않음
}
유형 = 유형 || "FX";

동안(나는--) {
    tmp = dataPriv.get(elements[i], type + "queueHooks");
    if (tmp && tmp.empty) {
        카운트++;
        tmp.empty.add(해결);
    }
}
해결하다();
		반환 defer.promise(obj);
	}
} );
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var rcssNum = 새로운 RegExp("^(?:([+-])=|)(" + pnum + ")([az%]*)$", "i");


var cssExpand = ["위쪽", "오른쪽", "아래쪽", "왼쪽"];

var 문서 요소 = 문서.문서 요소;



var isAttached = 기능(요소) {
    반환 jQuery.contains(elem.ownerDocument, elem);
		},
구성 = { 구성: 참 };

// 지원: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2만 해당
// 가능하면 Shadow DOM 경계를 넘어 첨부 파일을 확인합니다(gh-3504).
// 지원: iOS 10.0-10.2 전용
// 초기 iOS 10 버전은 `attachShadow`를 지원하지만 `getRootNode`는 지원하지 않습니다.
// 오류로 이어집니다. `getRootNode`를 확인해야 합니다.
if (documentElement.getRootNode) {
    isAttached = 기능(요소) {
        jQuery.contains(elem.ownerDocument, elem) 반환 ||
            elem.getRootNode(구성됨) === elem.ownerDocument;
    };
}
var isHiddenWithinTree = 기능(요소, 엘) {

    // isHiddenWithinTree는 jQuery#filter 함수에서 호출될 수 있습니다.
    // 이 경우 요소는 두 번째 인수가 됩니다.
    요소 = 엘 || 요소;

// 인라인 스타일이 모든 것을 능가합니다.
elem.style.display를 반환 === "없음" ||
    elem.style.display === "" &&

    // 그렇지 않으면 계산된 스타일을 확인합니다.
    // 지원: 파이어폭스 <=43 - 45
    // 연결이 끊긴 요소는 display: none을 계산할 수 있으므로 먼저 elem이 다음인지 확인합니다.
    // 문서에서.
    isAttached(요소) &&

    jQuery.css(요소, "디스플레이") === "없음";
	};



기능 adjustCSS(요소, 소품, 값 부품, 트윈) {
    var 조정, 규모,
        최대 반복 횟수 = 20,
        현재 값 = 트윈 ?
            기능() {
                반환 tween.cur();
} :
기능() {
    jQuery.css(요소, 소품, "")를 반환합니다.
			},
초기 = 현재값(),
    단위 = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),

    // 잠재적인 단위 불일치에 대한 시작 값 계산이 필요합니다.
    initialInUnit = elem.nodeType &&
    (jQuery.cssNumber[prop] || unit !== "px" && +initial) &&
    rcssNum.exec(jQuery.css(요소, 소품));

if (initialInUnit && initialInUnit[3] !== 단위) {

    // 지원: 파이어폭스 <=54
    // CSS 상한선(gh-2144)의 간섭을 방지하기 위해 반복 대상 값을 절반으로 줄입니다.
    초기 = 초기 / 2;

    // jQuery.css에서 보고한 신뢰 단위
    단위 = 단위 || 초기 단위[3];

    // 0이 아닌 시작점에서 반복적으로 근사
    initialInUnit = +초기 || 1;

    동안(maxIterations--) {

        // 최선의 추측을 평가하고 업데이트합니다(0이 나오는 추측을 두 배로 늘림).
        // 스케일이 1과 같거나 넘으면 완료합니다(이전*새 제품을 양수가 아닌 것으로 만들기).
        jQuery.style(요소, 소품, initialInUnit + 단위);
        if ((1 - scale) * (1 - (scale = currentValue() / 초기 || 0.5)) <= 0) {
				최대 반복 횟수 = 0;
        }
        initialInUnit = initialInUnit / 스케일;

    }

    initialInUnit = initialInUnit * 2;
    jQuery.style(요소, 소품, initialInUnit + 단위);

		// 나중에 트윈 속성을 업데이트해야 합니다.
		값 부품 = 값 부품 || [];
}

if (valueParts) {
    initialInUnit = +initialInUnit || +이니셜 || 0;

    // 지정된 경우 상대 오프셋(+=/-=) 적용
    조정 = valueParts[1] ?
        initialInUnit + (valueParts[1] + 1) * valueParts[2] :
        +값부분[2];
    if (트윈) {
        tween.unit = 단위;
        tween.start = initialInUnit;
        tween.end = 조정됨;
    }
}
	조정된 수익;
}


var defaultDisplayMap = {};

함수 getDefaultDisplay(요소) {
	변수 온도,
        문서 = elem.owner문서,
        노드 이름 = 요소.노드 이름,
            디스플레이 = defaultDisplayMap[노드이름];

    if (표시) {
		리턴 디스플레이;
    }

    임시 = doc.body.appendChild(doc.createElement(nodeName));
    디스플레이 = jQuery.css(temp, "디스플레이");

    temp.parentNode.removeChild(임시);

    if (디스플레이 === "없음") {
        디스플레이 = "차단";
    }
    defaultDisplayMap[nodeName] = 표시;

	리턴 디스플레이;
}

기능 showHide(요소, 표시) {
    var 디스플레이, 요소,
        값 = [],
        인덱스 = 0,
        길이 = 요소.길이;

    // 변경해야 하는 요소에 대한 새 표시 값 결정
    ( ; 인덱스 < 길이; 인덱스++ ) {
        요소 = 요소[인덱스];
        if (!elem.style) {
            계속하다;
        }

        디스플레이 = elem.style.display;
        if (보여주기) {

            // cascade-hidden 요소에 대한 가시성을 강제하기 때문에 즉각적(그리고 느림)
            // 비어 있지 않은 표시 값이 없는 한 이 첫 번째 루프에서 검사가 필요합니다.
            // 인라인 또는 복원 예정)
            if (디스플레이 === "없음") {
                값[인덱스] = dataPriv.get(요소, "디스플레이") || 없는;
                if (!값[인덱스]) {
                    elem.style.display = "";
                }
            }
            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                값[인덱스] = getDefaultDisplay(요소);
            }
        } 또 다른 {
            if (표시 !== "없음") {
                값[인덱스] = "없음";

                // 덮어쓰는 내용을 기억합니다.
                dataPriv.set(요소, "디스플레이", 디스플레이);
            }
        }
    }

    // 지속적인 리플로우를 피하기 위해 두 번째 루프에서 요소의 표시를 설정합니다.
    for (인덱스 = 0; 인덱스 < 길이; 인덱스++) {
        if (값[인덱스] != null) {
            요소[인덱스].style.display = 값[인덱스];
        }
    }

	반환 요소;
}

jQuery.fn.extend({
    표시: 함수() {
    return showHide(this, true);
},
    숨기기: 함수() {
    return showHide(this);
},
    토글: 기능(상태) {
        if(상태 유형 === "부울") {
			반환 상태 ? this.show() : this.hide();
}

this.each(function () {
    if (isHiddenWithinTree(this)) {
        jQuery(this).show();
    } 또 다른 {
        jQuery(this).hide();
    }
});
	}
} );
var rcheckableType = (/^(?:체크박스|라디오)$/i);

var rtagName = (/<([az][^\/\0>\x20\t\r\n\f]*)/i);

var rscriptType = (/^$|^모듈$|\/(?:java|ecma)스크립트/i);



(기능() {
    var 조각 = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        입력 = document.createElement("입력");

    // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (#11217)
    // Support: Windows Web Apps (WWA)
    // `name` and `type` must use .setAttribute for WWA (#14901)
    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");

    div.appendChild(input);

    // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments
    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

    // Support: IE <=11 only
    // Make sure textarea (and checkbox) defaultValue is properly cloned
    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;

    // 지원: IE <=9 전용
    // IE <=9는 외부에 삽입될 때 <option> 태그를 해당 내용으로 대체합니다.
    // 선택 요소.
    div.innerHTML = "<옵션></옵션>";
    support.option = !!div.lastChild;
} ) ();


// XHTML을 지원하려면 이 태그를 닫아야 합니다. (#13200)
var 랩맵 = {

    // XHTML 파서는 마술처럼 요소를 삽입하지 않습니다.
    // 태그 수프 파서가 하는 것과 같은 방식입니다. 그래서 우리는 단축 할 수 없습니다
    // <tbody> 또는 기타 필수 요소를 생략하여 이를 수행합니다.
    헤드: [1, "<표>", "</표>"],
    열: [2, "<표><colgroup>", "</colgroup></table>"],
    tr: [2, "<표><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

    _default: [0, "", ""]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if (!support.option) {
    wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
}


function getAll(context, tag) {

    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
    var ret;

    if (typeof context.getElementsByTagName !== "undefined") {
        ret = context.getElementsByTagName(tag || "*");

    } else if (typeof context.querySelectorAll !== "undefined") {
        ret = context.querySelectorAll(tag || "*");

    } else {
        ret = [];
    }

    if (tag === undefined || tag && nodeName(context, tag)) {
        return jQuery.merge([context], ret);
    }

    return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;

    for (; i < l; i++) {
        dataPriv.set(
            elems[i],
            "globalEval",
            !refElements || dataPriv.get(refElements[i], "globalEval")
        );
    }
}


var rhtml = /<|&#?\w+;/;

function buildFragment(elems, context, scripts, selection, ignored) {
    var elem, tmp, tag, wrap, attached, j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;

    for (; i < l; i++) {
        elem = elems[i];

        if (elem || elem === 0) {

            // Add nodes directly
            if (toType(elem) === "object") {

                // Support: Android <=4.0 only, PhantomJS 1 only
                // push.apply(_, arraylike) throws on ancient WebKit
                jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

                // Convert non-html into a text node
            } else if (!rhtml.test(elem)) {
                nodes.push(context.createTextNode(elem));

                // Convert html into DOM nodes
            } else {
                tmp = tmp || fragment.appendChild(context.createElement("div"));

                // Deserialize a standard representation
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

                // Descend through wrappers to the right content
                j = wrap[0];
                while (j--) {
                    tmp = tmp.lastChild;
                }

                // Support: Android <=4.0 only, PhantomJS 1 only
                // push.apply(_, arraylike) throws on ancient WebKit
                jQuery.merge(nodes, tmp.childNodes);

                // Remember the top-level container
                tmp = fragment.firstChild;

                // Ensure the created nodes are orphaned (#12392)
                tmp.textContent = "";
            }
        }
    }

    // Remove wrapper from fragment
    fragment.textContent = "";

    i = 0;
    while ((elem = nodes[i++])) {

        // Skip elements already in the context collection (trac-4087)
        if (selection && jQuery.inArray(elem, selection) > -1) {
            if (ignored) {
                ignored.push(elem);
            }
            continue;
        }

        attached = isAttached(elem);

        // Append to fragment
        tmp = getAll(fragment.appendChild(elem), "script");

        // Preserve script evaluation history
        if (attached) {
            setGlobalEval(tmp);
        }

        // Capture executables
        if (scripts) {
            j = 0;
            while ((elem = tmp[j++])) {
                if (rscriptType.test(elem.type || "")) {
                    scripts.push(elem);
                }
            }
        }
    }

    return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
    return true;
}

function returnFalse() {
    return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync(elem, type) {
    return (elem === safeActiveElement()) === (type === "focus");
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
    try {
        return document.activeElement;
    } 잡기(오류) { }
}

기능 켜기(요소, 유형, 선택기, 데이터, fn, 하나) {
    var origFn, 유형;

    // 유형은 유형/핸들러의 맵일 수 있습니다.
    if (typeof 유형 === "객체") {

        // ( 유형-객체, 선택기, 데이터 )
        if (typeof 선택기 !== "문자열") {

            // ( 유형-객체, 데이터 )
            데이터 = 데이터 || 선택자;
            선택기 = 정의되지 않음;
        }
        (유형 입력) {
            on(요소, 유형, 선택기, 데이터, 유형[유형], 하나);
        }
		반환 요소;
    }

    if (데이터 == null && fn == null) {

        // ( 유형, fn )
        fn = 선택기;
        데이터 = 선택기 = 정의되지 않음;
    } 그렇지 않으면(fn == null) {
        if (typeof 선택기 === "문자열") {

            // ( 유형, 선택자, fn )
            fn = 데이터;
            데이터 = 정의되지 않음;
        } 또 다른 {

            // ( 유형, 데이터, fn )
            fn = 데이터;
            데이터 = 선택기;
            선택기 = 정의되지 않음;
        }
    }
    경우(fn === 거짓) {
        fn = returnFalse;
    } 그렇지 않으면(!fn) {
		반환 요소;
    }

    if (하나 === 1) {
        origFn = fn;
        fn = function (event) {

            // Can use an empty set, since event contains the info
            jQuery().off(event);
            return origFn.apply(this, arguments);
        };

        // Use same guid so caller can remove using origFn
        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }
    return elem.each(function () {
        jQuery.event.add(this, types, fn, data, selector);
    });
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

    global: {},

    add: function (elem, types, handler, data, selector) {

        var handleObjIn, eventHandle, tmp,
            events, t, handleObj,
            special, handlers, type, namespaces, origType,
            elemData = dataPriv.get(elem);

        // Only attach events to objects that accept data
        if (!acceptData(elem)) {
            return;
        }

        // Caller can pass in an object of custom data in lieu of the handler
        if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
        }

        // Ensure that invalid selectors throw exceptions at attach time
        // Evaluate against documentElement in case elem is a non-element node (e.g., document)
        if (selector) {
            jQuery.find.matchesSelector(documentElement, selector);
        }

        // Make sure that the handler has a unique ID, used to find/remove it later
        if (!handler.guid) {
            handler.guid = jQuery.guid++;
        }

        // Init the element's event structure and main handler, if this is the first
        if (!(events = elemData.events)) {
            events = elemData.events = Object.create(null);
        }
        if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function (e) {

                // Discard the second event of a jQuery.event.trigger() and
                // when an event is called after a page has unloaded
                return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
                    jQuery.event.dispatch.apply(elem, arguments) : undefined;
            };
        }

        // Handle multiple events separated by a space
        types = (types || "").match(rnothtmlwhite) || [""];
        t = types.length;
        while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();

            // There *must* be a type, no attaching namespace-only handlers
            if (!type) {
                continue;
            }

            // If event changes its type, use the special event handlers for the changed type
            special = jQuery.event.special[type] || {};

            // 선택자가 정의된 경우 특수 이벤트 API 유형을 결정하고, 그렇지 않으면 유형을 지정합니다.
            유형 = (선택기 ? special.delegateType : special.bindType) || 유형;

            // 새로 재설정된 유형을 기반으로 특수 업데이트
            특수 = jQuery.event.special[유형] || {};

            // handleObj는 모든 이벤트 핸들러에 전달됩니다.
            handleObj = jQuery.extend({
                유형: 유형,
                원본 유형: 원본 유형,
                데이터: 데이터,
                핸들러: 핸들러,
                guid: 핸들러.guid,
                선택기: 선택기,
                NeedsContext: 선택기 && jQuery.expr.match.needsContext.test(선택기),
                네임스페이스: namespaces.join(".")
            }, 핸들ObjIn);

            // 우리가 첫 번째인 경우 이벤트 핸들러 큐를 초기화합니다.
            if (!(핸들러 = 이벤트[유형])) {
                핸들러 = 이벤트[유형] = [];
                handlers.delegateCount = 0;

                // 특수 이벤트 핸들러가 false를 반환하는 경우에만 addEventListener를 사용합니다.
                if (!special.setup ||
                    special.setup.call(elem, data, namespaces, eventHandle) === false) {

                    if (elem.addEventListener) {
                        elem.addEventListener(type, eventHandle);
                    }
                }
            }

            if (special.add) {
                special.add.call(elem, handleObj);

                if (!handleObj.handler.guid) {
                    handleObj.handler.guid = handler.guid;
                }
            }

            // Add to the element's handler list, delegates in front
            if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
                handlers.push(handleObj);
            }

            // Keep track of which events have ever been used, for event optimization
            jQuery.event.global[type] = true;
        }

    },

    // Detach an event or set of events from an element
    remove: function (elem, types, handler, selector, mappedTypes) {

        var j, origCount, tmp,
            events, t, handleObj,
            special, handlers, type, namespaces, origType,
            elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

        if (!elemData || !(events = elemData.events)) {
            return;
        }

        // Once for each type.namespace in types; type may be omitted
        types = (types || "").match(rnothtmlwhite) || [""];
        t = types.length;
        while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();

            // Unbind all events (on this namespace, if provided) for the element
            if (!type) {
                for (type in events) {
                    jQuery.event.remove(elem, type + types[t], handler, selector, true);
                }
                continue;
            }

            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] &&
                new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

            // Remove matching events
            origCount = j = handlers.length;
            while (j--) {
                handleObj = handlers[j];

                if ((mappedTypes || origType === handleObj.origType) &&
                    (!handler || handler.guid === handleObj.guid) &&
                    (!tmp || tmp.test(handleObj.namespace)) &&
                    (!selector || selector === handleObj.selector ||
                        selector === "**" && handleObj.selector)) {
                    handlers.splice(j, 1);

                    if (handleObj.selector) {
                        handlers.delegateCount--;
                    }
                    if (special.remove) {
                        special.remove.call(elem, handleObj);
                    }
                }
            }

            // Remove generic event handler if we removed something and no more handlers exist
            // (avoids potential for endless recursion during removal of special event handlers)
            if (origCount && !handlers.length) {
                if (!special.teardown ||
                    special.teardown.call(elem, namespaces, elemData.handle) === false) {

                    jQuery.removeEvent(elem, type, elemData.handle);
                }

                delete events[type];
            }
        }

        // Remove data and the expando if it's no longer used
        if (jQuery.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
        }
    },

    dispatch: function (nativeEvent) {

        var i, j, ret, matched, handleObj, handlerQueue,
            args = new Array(arguments.length),

            // Make a writable jQuery.Event from the native event object
            event = jQuery.event.fix(nativeEvent),

            handlers = (
                dataPriv.get(this, "events") || Object.create(null)
            )[event.type] || [],
            special = jQuery.event.special[event.type] || {};

        // Use the fix-ed jQuery.Event rather than the (read-only) native event
        args[0] = event;

        for (i = 1; i < arguments.length; i++) {
            args[i] = arguments[i];
        }

        event.delegateTarget = this;

        // Call the preDispatch hook for the mapped type, and let it bail if desired
        if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return;
        }

        // Determine handlers
        handlerQueue = jQuery.event.handlers.call(this, event, handlers);

        // Run delegates first; they may want to stop propagation beneath us
        i = 0;
        while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;

            j = 0;
            while ((handleObj = matched.handlers[j++]) &&
                !event.isImmediatePropagationStopped()) {

                // If the event is namespaced, then each handler is only invoked if it is
                // specially universal or its namespaces are a superset of the event's.
                if (!event.rnamespace || handleObj.namespace === false ||
                    event.rnamespace.test(handleObj.namespace)) {

                    event.handleObj = handleObj;
                    event.data = handleObj.data;

                    ret = ((jQuery.event.special[handleObj.origType] || {}).handle ||
                        handleObj.handler).apply(matched.elem, args);

                    if (ret !== undefined) {
                        if ((event.result = ret) === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                    }
                }
            }
        }

        // Call the postDispatch hook for the mapped type
        if (special.postDispatch) {
            special.postDispatch.call(this, event);
        }

        return event.result;
    },

    handlers: function (event, handlers) {
        var i, handleObj, sel, matchedHandlers, matchedSelectors,
            handlerQueue = [],
            delegateCount = handlers.delegateCount,
            cur = event.target;

        // Find delegate handlers
        if (delegateCount &&

            // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType &&

            // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event.type === "click" && event.button >= 1)) {

            for (; cur !== this; cur = cur.parentNode || this) {

                // Don't check non-elements (#13208)
                // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                    matchedHandlers = [];
                    matchedSelectors = {};
                    for (i = 0; i < delegateCount; i++) {
                        handleObj = handlers[i];

                        // Don't conflict with Object.prototype properties (#13203)
                        sel = handleObj.selector + " ";

                        if (matchedSelectors[sel] === undefined) {
                            matchedSelectors[sel] = handleObj.needsContext ?
                                jQuery(sel, this).index(cur) > -1 :
                                jQuery.find(sel, this, null, [cur]).length;
                        }
                        if (matchedSelectors[sel]) {
                            matchHandlers.push(handleObj);
                        }
                    }
                    if (matchedHandlers.length) {
                        handlerQueue.push({ 요소: cur, 핸들러: matchHandlers });
                    }
                }
            }
        }

        // 나머지 (직접 바인딩된) 핸들러를 추가합니다.
        커 = 이것;
        if (delegateCount < handlers.length) {
            handlerQueue.push({ 요소: cur, 핸들러: handlers.slice(delegateCount) });
        }

		반환 핸들러 큐;
    },

    addProp: 함수(이름, 후크) {
    Object.defineProperty(jQuery.Event.prototype, 이름, {
        열거 가능한: 사실,
        구성 가능: 참,

        get: isFunction(후크) ?
            기능() {
        if(this.originalEvent ) {
						반환 후크(this.originalEvent);
    }
} :
기능() {
    if (this.originalEvent) {
        this.originalEvent[이름]을 반환합니다.
					}
},

세트: 함수(값) {
    Object.defineProperty(이, 이름, {
        열거 가능한: 사실,
        구성 가능: 참,
        쓰기 가능: 사실,
        value: value
    });
}
		} );
	},

fix: function(originalEvent) {
    return originalEvent[jQuery.expando] ?
        originalEvent :
        new jQuery.Event(originalEvent);
},

special: {
    load: {

        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
    },
    click: {

        // Utilize native event to ensure correct state for checkable inputs
        setup: function(data) {

            // For mutual compressibility with _default, replace `this` access with a local var.
            // `|| data` is dead code meant only to preserve the variable through minification.
            var el = this || data;

            // Claim the first handler
            if (rcheckableType.test(el.type) &&
                el.click && nodeName(el, "input")) {

                // dataPriv.set( el, "click", ... )
                leverageNative(el, "click", returnTrue);
            }

            // Return false to allow normal processing in the caller
            return false;
        },
        trigger: function(data) {

            // For mutual compressibility with _default, replace `this` access with a local var.
            // `|| data` is dead code meant only to preserve the variable through minification.
            var el = this || data;

            // Force setup before triggering a click
            if (rcheckableType.test(el.type) &&
                el.click && nodeName(el, "input")) {

                leverageNative(el, "click");
            }

            // Return non-false to allow normal event-path propagation
            return true;
        },

        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function(event) {
            var target = event.target;
            return rcheckableType.test(target.type) &&
                target.click && nodeName(target, "input") &&
                dataPriv.get(target, "click") ||
                nodeName(target, "a");
        }
    },

    beforeunload: {
        postDispatch: function(event) {

            // Support: Firefox 20+
            // Firefox doesn't alert if the returnValue field is not set.
            if (event.result !== undefined && event.originalEvent) {
                event.originalEvent.returnValue = event.result;
            }
        }
    }
}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative(el, type, expectSync) {

    // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
    if (!expectSync) {
        if (dataPriv.get(el, type) === undefined) {
            jQuery.event.add(el, type, returnTrue);
        }
        return;
    }

    // Register the controller as a special universal handler for all event namespaces
    dataPriv.set(el, type, false);
    jQuery.event.add(el, type, {
        namespace: false,
        handler: function (event) {
            var notAsync, result,
                saved = dataPriv.get(this, type);

            if ((event.isTrigger & 1) && this[type]) {

                // Interrupt processing of the outer synthetic .trigger()ed event
                // Saved data should be false in such cases, but might be a leftover capture object
                // from an async native handler (gh-4350)
                if (!saved.length) {

                    // Store arguments for use when handling the inner native event
                    // There will always be at least one argument (an event object), so this array
                    // will not be confused with a leftover capture object.
                    saved = slice.call(arguments);
                    dataPriv.set(this, type, saved);

                    // Trigger the native event and capture its result
                    // Support: IE <=9 - 11+
                    // focus() and blur() are asynchronous
                    notAsync = expectSync(this, type);
                    this[type]();
                    result = dataPriv.get(this, type);
                    if (saved !== result || notAsync) {
                        dataPriv.set(this, type, false);
                    } else {
                        result = {};
                    }
                    if (saved !== result) {

                        // Cancel the outer synthetic event
                        event.stopImmediatePropagation();
                        event.preventDefault();

						// Support: Chrome 86+
						// Chrome에서 포커스 아웃 핸들러가 있는 요소가
						// 외부를 클릭하면 핸들러를 동기적으로 호출합니다. 만약에
						// 핸들러가 요소에서 `.remove()`를 호출하면 데이터가 지워집니다.
						// '결과'를 정의하지 않은 상태로 둡니다. 우리는 이것을 경계해야 합니다.
						반환 결과 && result.value;
                    }

                    // 이것이 버블링 대리가 있는 이벤트에 대한 내부 합성 이벤트인 경우
                    // (포커스 또는 블러), 서로게이트가 트리거링에서 이미 전파되었다고 가정합니다.
                    // 네이티브 이벤트를 생성하고 여기서 다시 발생하지 않도록 합니다.
                    // 이것은 기술적으로 잘못된 순서를 `.trigger()`로 가져옵니다(여기서
                    // 버블링 대리는 버블링이 아닌 베이스 *이후* 전파되지만,
                    // 복제보다 덜 나쁘다.
                } else if ((jQuery.event.special[유형] || {}).delegateType) {
                    event.stopPropagation();
                }

                // 이것이 위에서 트리거된 기본 이벤트인 경우 이제 모든 것이 정상입니다.
                // 원래 인수로 내부 합성 이벤트를 발생시킵니다.
            } else if (저장된 길이) {

        // ...결과를 캡처
        dataPriv.set(이, 유형, {
            값: jQuery.event.trigger(

                // 지원: IE <=9 - 11+
                // 프로토타입으로 확장하여 위의 stopImmediatePropagation()을 재설정합니다.
                jQuery.extend(저장[0], jQuery.Event.prototype),
                저장된.슬라이스(1),
                이것
            )
        });

        // 네이티브 이벤트 처리 중단
        event.stopImmediatePropagation();
    }
}
	} );
}

jQuery.removeEvent = function (요소, 유형, 핸들) {

    // 이 "if"는 일반 객체에 필요합니다.
    if (elem.removeEventListener) {
        elem.removeEventListener(유형, 핸들);
    }
};

jQuery.Event = 기능(src, 소품) {

    // 'new' 키워드 없이 인스턴스화 허용
    if (!(이 jQuery.Event 인스턴스) ) {
		새로운 jQuery.Event(src, props)를 반환합니다.
	}

    // 이벤트 객체
    if (src && src.type) {
        this.originalEvent = src;
        this.type = src.type;

        // 문서를 버블링하는 이벤트는 방지된 것으로 표시되었을 수 있습니다.
        // 핸들러에 의해 트리 아래로; 올바른 값을 반영합니다.
        this.isDefaultPrevented = src.defaultPrevented ||
            src.defaultPrevented === 정의되지 않음 &&

                // 지원: Android <=2.3 전용
                src.returnValue === 거짓 ?
                반환 참:
			반환 거짓;

        // 타겟 속성 생성
        // 지원: Safari <=6 - 7만 해당
        // 타겟은 텍스트 노드가 아니어야 합니다. (#504, #13143)
        this.target = (src.target && src.target.nodeType === 3) ?
            src.target.parentNode :
            src.target;

        this.currentTarget = src.currentTarget;
        this.relatedTarget = src.relatedTarget;

        // Event type
    } else {
        this.type = src;
    }

    // Put explicitly provided properties onto the event object
    if (props) {
        jQuery.extend(this, props);
    }

    // Create a timestamp if incoming event doesn't have one
    this.timeStamp = src && src.timeStamp || Date.now();

    // Mark it as fixed
    this[jQuery.expando] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,

    preventDefault: function () {
        var e = this.originalEvent;

        this.isDefaultPrevented = returnTrue;

        if (e && !this.isSimulated) {
            e.preventDefault();
        }
    },
    stopPropagation: function () {
        var e = this.originalEvent;

        this.isPropagationStopped = returnTrue;

        if (e && !this.isSimulated) {
            e.stopPropagation();
        }
    },
    stopImmediatePropagation: function () {
        var e = this.originalEvent;

        this.isImmediatePropagationStopped = returnTrue;

        if (e && !this.isSimulated) {
            e.stopImmediatePropagation();
        }

        this.stopPropagation();
    }
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: true
}, jQuery.event.addProp);

jQuery.each({ focus: "focusin", blur: "focusout" }, function (type, delegateType) {
    jQuery.event.special[type] = {

        // Utilize native event if possible so blur/focus sequence is correct
        setup: function () {

            // Claim the first handler
            // dataPriv.set( this, "focus", ... )
            // dataPriv.set( this, "blur", ... )
            leverageNative(this, type, expectSync);

            // Return false to allow normal processing in the caller
            return false;
        },
        trigger: function () {

            // Force setup before trigger
            leverageNative(this, type);

            // Return non-false to allow normal event-path propagation
            return true;
        },

        // Suppress native focus or blur as it's already being fired
        // in leverageNative.
        _default: function () {
            return true;
        },

        delegateType: delegateType
    };
});

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
}, function (orig, fix) {
    jQuery.event.special[orig] = {
        delegateType: fix,
        bindType: fix,

        handle: function (event) {
            var ret,
                target = this,
                related = event.relatedTarget,
                handleObj = event.handleObj;

            // For mouseenter/leave call the handler if related is outside the target.
            // NB: No relatedTarget if the mouse left/entered the browser window
            if (!related || (related !== target && !jQuery.contains(target, related))) {
                event.type = handleObj.origType;
                ret = handleObj.handler.apply(this, arguments);
                event.type = fix;
            }
            return ret;
        }
    };
});

jQuery.fn.extend({

    on: function (types, selector, data, fn) {
        return on(this, types, selector, data, fn);
    },
    one: function (types, selector, data, fn) {
        return on(this, types, selector, data, fn, 1);
    },
    off: function (types, selector, fn) {
        var handleObj, type;
        if (types && types.preventDefault && types.handleObj) {

            // ( event )  dispatched jQuery.Event
            handleObj = types.handleObj;
            jQuery(types.delegateTarget).off(
                handleObj.namespace ?
                    handleObj.origType + "." + handleObj.namespace :
                    handleObj.origType,
                handleObj.selector,
                handleObj.handler
            );
            return this;
        }
        if (typeof types === "object") {

            // ( types-object [, selector] )
            for (type in types) {
                this.off(type, selector, types[type]);
            }
            return this;
        }
        if (selector === false || typeof selector === "function") {

            // ( types [, fn] )
            fn = selector;
            selector = undefined;
        }
        if (fn === false) {
            fn = returnFalse;
        }
        return this.each(function () {
            jQuery.event.remove(this, types, fn, selector);
        });
    }
});


var

    // Support: IE <=10 - 11, Edge 12 - 13 only
    // In IE/Edge using regex groups here causes severe slowdowns.
    // See https://connect.microsoft.com/IE/feedback/details/1736512/
    rnoInnerhtml = /<script|<style|<link/i,

    // checked="checked" or checked
    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") &&
        nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {

        return jQuery(elem).children("tbody")[0] || elem;
    }

    return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
}
function restoreScript(elem) {
    if ((elem.type || "").slice(0, 5) === "true/") {
        elem.type = elem.type.slice(5);
    } else {
        elem.removeAttribute("type");
    }

    return elem;
}

function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, udataOld, udataCur, events;

    if (dest.nodeType !== 1) {
        return;
    }

    // 1. Copy private data: events, handlers, etc.
    if (dataPriv.hasData(src)) {
        pdataOld = dataPriv.get(src);
        events = pdataOld.events;

        if (events) {
            dataPriv.remove(dest, "handle events");

            for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                    jQuery.event.add(dest, type, events[type][i]);
                }
            }
        }
    }

    // 2. Copy user data
    if (dataUser.hasData(src)) {
        udataOld = dataUser.access(src);
        udataCur = jQuery.extend({}, udataOld);

        dataUser.set(dest, udataCur);
    }
}

// Fix IE bugs, see support tests
function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase();

    // Fails to persist the checked state of a cloned checkbox or radio button.
    if (nodeName === "input" && rcheckableType.test(src.type)) {
        dest.checked = src.checked;

        // Fails to return the selected option to the default selected state when cloning options
    } else if (nodeName === "input" || nodeName === "textarea") {
        dest.defaultValue = src.defaultValue;
    }
}

function domManip(collection, args, callback, ignored) {

    // Flatten any nested arrays
    args = flat(args);

    var fragment, first, scripts, hasScripts, node, doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        valueIsFunction = isFunction(value);

    // We can't cloneNode fragments that contain checked, in WebKit
    if (valueIsFunction ||
        (l > 1 && typeof value === "string" &&
            !support.checkClone && rchecked.test(value))) {
        return collection.each(function (index) {
            var self = collection.eq(index);
            if (valueIsFunction) {
                args[0] = value.call(this, index, self.html());
            }
            domManip(self, args, callback, ignored);
        });
    }

    if (l) {
        fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
        first = fragment.firstChild;

        if (fragment.childNodes.length === 1) {
            fragment = first;
        }

        // Require either new content or an interest in ignored elements to invoke the callback
        if (first || ignored) {
            scripts = jQuery.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length;

            // Use the original fragment for the last item
            // instead of the first because it can end up
            // being emptied incorrectly in certain situations (#8070).
            for (; i < l; i++) {
                node = fragment;

                if (i !== iNoClone) {
                    node = jQuery.clone(node, true, true);

                    // Keep references to cloned scripts for later restoration
                    if (hasScripts) {

                        // Support: Android <=4.0 only, PhantomJS 1 only
                        // push.apply(_, arraylike) throws on ancient WebKit
                        jQuery.merge(scripts, getAll(node, "script"));
                    }
                }

                callback.call(collection[i], node, i);
            }

            if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;

                // Reenable scripts
                jQuery.map(scripts, restoreScript);

                // Evaluate executable scripts on first document insertion
                for (i = 0; i < hasScripts; i++) {
                    node = scripts[i];
                    if (rscriptType.test(node.type || "") &&
                        !dataPriv.access(node, "globalEval") &&
                        jQuery.contains(doc, node)) {

                        if (node.src && (node.type || "").toLowerCase() !== "module") {

                            // Optional AJAX dependency, but won't run scripts if not present
                            if (jQuery._evalUrl && !node.noModule) {
                                jQuery._evalUrl(node.src, {
                                    nonce: node.nonce || node.getAttribute("nonce")
                                }, doc);
                            }
                        } else {
                            DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                        }
                    }
                }
            }
        }
    }

    return collection;
}

function remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;

    for (; (node = nodes[i]) != null; i++) {
        if (!keepData && node.nodeType === 1) {
            jQuery.cleanData(getAll(node));
        }

        if (node.parentNode) {
            if (keepData && isAttached(node)) {
                setGlobalEval(getAll(node, "script"));
            }
            node.parentNode.removeChild(node);
        }
    }

    return elem;
}

jQuery.extend({
    htmlPrefilter: function (html) {
        return html;
    },

    clone: function (elem, dataAndEvents, deepDataAndEvents) {
        var i, l, srcElements, destElements,
            clone = elem.cloneNode(true),
            inPage = isAttached(elem);

        // Fix IE cloning issues
        if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) &&
            !jQuery.isXMLDoc(elem)) {

            // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
            destElements = getAll(clone);
            srcElements = getAll(elem);

            for (i = 0, l = srcElements.length; i < l; i++) {
                fixInput(srcElements[i], destElements[i]);
            }
        }

        // Copy the events from the original to the clone
        if (dataAndEvents) {
            if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem);
                destElements = destElements || getAll(clone);

                for (i = 0, l = srcElements.length; i < l; i++) {
                    cloneCopyEvent(srcElements[i], destElements[i]);
                }
            } else {
                cloneCopyEvent(elem, clone);
            }
        }

        // Preserve script evaluation history
        destElements = getAll(clone, "script");
        if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
        }

        // Return the cloned set
        return clone;
    },

    cleanData: function (elems) {
        var data, elem, type,
            special = jQuery.event.special,
            i = 0;

        for (; (elem = elems[i]) !== undefined; i++) {
            if (acceptData(elem)) {
                if ((data = elem[dataPriv.expando])) {
                    if (data.events) {
                        for (type in data.events) {
                            if (special[type]) {
                                jQuery.event.remove(elem, type);

                                // This is a shortcut to avoid jQuery.event.remove's overhead
                            } else {
                                jQuery.removeEvent(elem, type, data.handle);
                            }
                        }
                    }

                    // Support: Chrome <=35 - 45+
                    // Assign undefined instead of using delete, see Data#remove
                    elem[dataPriv.expando] = undefined;
                }
                if (elem[dataUser.expando]) {

                    // Support: Chrome <=35 - 45+
                    // Assign undefined instead of using delete, see Data#remove
                    elem[dataUser.expando] = undefined;
                }
            }
        }
    }
});

jQuery.fn.extend({
    detach: function (selector) {
        return remove(this, selector, true);
    },

    remove: function (selector) {
        return remove(this, selector);
    },

    text: function (value) {
        return access(this, function (value) {
            return value === undefined ?
                jQuery.text(this) :
                this.empty().each(function () {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        this.textContent = value;
                    }
                });
        }, null, value, arguments.length);
    },

    append: function () {
        return domManip(this, arguments, function (elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
            }
        });
    },

    prepend: function () {
        return domManip(this, arguments, function (elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
            }
        });
    },

    before: function () {
        return domManip(this, arguments, function (elem) {
            if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
            }
        });
    },

    after: function () {
        return domManip(this, arguments, function (elem) {
            if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
            }
        });
    },

    empty: function () {
        var elem,
            i = 0;

        for (; (elem = this[i]) != null; i++) {
            if (elem.nodeType === 1) {

                // Prevent memory leaks
                jQuery.cleanData(getAll(elem, false));

                // Remove any remaining nodes
                elem.textContent = "";
            }
        }

        return this;
    },

    clone: function (dataAndEvents, deepDataAndEvents) {
        dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
        deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

        return this.map(function () {
            return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
        });
    },

    html: function (value) {
        return access(this, function (value) {
            var elem = this[0] || {},
                i = 0,
                l = this.length;

            if (value === undefined && elem.nodeType === 1) {
                return elem.innerHTML;
            }

            // See if we can take a shortcut and just use innerHTML
            if (typeof value === "string" && !rnoInnerhtml.test(value) &&
                !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

                value = jQuery.htmlPrefilter(value);

                try {
                    for (; i < l; i++) {
                        elem = this[i] || {};

                        // Remove element nodes and prevent memory leaks
                        if (elem.nodeType === 1) {
                            jQuery.cleanData(getAll(elem, false));
                            elem.innerHTML = value;
                        }
                    }

                    elem = 0;

                    // If using innerHTML throws an exception, use the fallback method
                } catch (e) { }
            }

            if (elem) {
                this.empty().append(value);
            }
        }, null, value, arguments.length);
    },

    replaceWith: function () {
        var ignored = [];

        // Make the changes, replacing each non-ignored context element with the new content
        return domManip(this, arguments, function (elem) {
            var parent = this.parentNode;

            if (jQuery.inArray(this, ignored) < 0) {
                jQuery.cleanData(getAll(this));
                if (parent) {
                    parent.replaceChild(elem, this);
                }
            }

            // Force callback invocation
        }, ignored);
    }
});

jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
}, function (name, original) {
    jQuery.fn[name] = function (selector) {
        var elems,
            ret = [],
            insert = jQuery(selector),
            last = insert.length - 1,
            i = 0;

        for (; i <= last; i++) {
            elems = i === last ? this : this.clone(true);
            jQuery(insert[i])[original](elems);

            // Support: Android <=4.0 only, PhantomJS 1 only
            // .get() because push.apply(_, arraylike) throws on ancient WebKit
            push.apply(ret, elems.get());
        }

        return this.pushStack(ret);
    };
});
var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

var getStyles = function (elem) {

    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
        view = window;
    }

    return view.getComputedStyle(elem);
};

var swap = function (elem, options, callback) {
    var ret, name,
        old = {};

    // Remember the old values, and insert the new ones
    for (name in options) {
        old[name] = elem.style[name];
        elem.style[name] = options[name];
    }

    ret = callback.call(elem);

    // Revert the old values
    for (name in options) {
        elem.style[name] = old[name];
    }

    return ret;
};


var rboxStyle = new RegExp(cssExpand.join("|"), "i");



(function () {

    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests() {

        // This is a singleton, we need to execute it only once
        if (!div) {
            return;
        }

        container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
            "margin-top:1px;padding:0;border:0";
        div.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
            "margin:auto;border:1px;padding:1px;" +
            "width:60%;top:1%";
        documentElement.appendChild(container).appendChild(div);

        var divStyle = window.getComputedStyle(div);
        pixelPositionVal = divStyle.top !== "1%";

        // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
        reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;

        // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
        // Some styles come back with percentage values, even though they shouldn't
        div.style.right = "60%";
        pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;

        // Support: IE 9 - 11 only
        // Detect misreporting of content dimensions for box-sizing:border-box elements
        boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;

        // Support: IE 9 only
        // Detect overflow:scroll screwiness (gh-3699)
        // Support: Chrome <=64
        // Don't get tricked when zoom affects offsetWidth (gh-4029)
        div.style.position = "absolute";
        scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;

        documentElement.removeChild(container);

        // Nullify the div so it wouldn't be stored in the memory and
        // it will also be a sign that checks already performed
        div = null;
    }

    function roundPixelMeasures(measure) {
        return Math.round(parseFloat(measure));
    }

    var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
        reliableTrDimensionsVal, reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div");

    // Finish early in limited (non-browser) environments
    if (!div.style) {
        return;
    }

    // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (#8908)
    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";

    jQuery.extend(support, {
        boxSizingReliable: function () {
            computeStyleTests();
            return boxSizingReliableVal;
        },
        pixelBoxStyles: function () {
            computeStyleTests();
            return pixelBoxStylesVal;
        },
        pixelPosition: function () {
            computeStyleTests();
            return pixelPositionVal;
        },
        reliableMarginLeft: function () {
            computeStyleTests();
            return reliableMarginLeftVal;
        },
        scrollboxSize: function () {
            computeStyleTests();
            return scrollboxSizeVal;
        },

        // Support: IE 9 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Behavior in IE 9 is more subtle than in newer versions & it passes
        // some versions of this test; make sure not to make it pass there!
        //
        // Support: Firefox 70+
        // Only Firefox includes border widths
        // in computed dimensions. (gh-4529)
        reliableTrDimensions: function () {
            var table, tr, trChild, trStyle;
            if (reliableTrDimensionsVal == null) {
                table = document.createElement("table");
                tr = document.createElement("tr");
                trChild = document.createElement("div");

                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                tr.style.cssText = "border:1px solid";

                // Support: Chrome 86+
                // Height set through cssText does not get applied.
                // Computed height then comes back as 0.
                tr.style.height = "1px";
                trChild.style.height = "9px";

                // Support: Android 8 Chrome 86+
                // In our bodyBackground.html iframe,
                // display for all div elements is set to "inline",
                // which causes a problem only in Android 8 Chrome 86.
                // Ensuring the div is display: block
                // gets around this issue.
                trChild.style.display = "block";

                documentElement
                    .appendChild(table)
                    .appendChild(tr)
                    .appendChild(trChild);

                trStyle = window.getComputedStyle(tr);
                reliableTrDimensionsVal = (parseInt(trStyle.height, 10) +
                    parseInt(trStyle.borderTopWidth, 10) +
                    parseInt(trStyle.borderBottomWidth, 10)) === tr.offsetHeight;

                documentElement.removeChild(table);
            }
            return reliableTrDimensionsVal;
        }
    });
})();


function curCSS(elem, name, computed) {
    var width, minWidth, maxWidth, ret,

        // Support: Firefox 51+
        // Retrieving style before computed somehow
        // fixes an issue with getting wrong values
        // on detached elements
        style = elem.style;

    computed = computed || getStyles(elem);

    // getPropertyValue is needed for:
    //   .css('filter') (IE 9 only, #12537)
    //   .css('--customProperty) (#3144)
    if (computed) {
        ret = computed.getPropertyValue(name) || computed[name];

        if (ret === "" && !isAttached(elem)) {
            ret = jQuery.style(elem, name);
        }

        // A tribute to the "awesome hack by Dean Edwards"
        // Android Browser returns percentage for some values,
        // but width seems to be reliably pixels.
        // This is against the CSSOM draft spec:
        // https://drafts.csswg.org/cssom/#resolved-values
        if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {

            // Remember the original values
            width = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth;

            // Put in the new values to get a computed value out
            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed.width;

            // Revert the changed values
            style.width = width;
            style.minWidth = minWidth;
            style.maxWidth = maxWidth;
        }
    }

    return ret !== undefined ?

        // Support: IE <=9 - 11 only
        // IE returns zIndex value as an integer.
        ret + "" :
        ret;
}


function addGetHookIf(conditionFn, hookFn) {

    // Define the hook, we'll check on the first run if it's really needed.
    return {
        get: function () {
            if (conditionFn()) {

                // Hook not needed (or it's not possible to use it due
                // to missing dependency), remove it.
                delete this.get;
                return;
            }

            // Hook needed; redefine it so that the support test is not executed again.
            return (this.get = hookFn).apply(this, arguments);
        }
    };
}


var cssPrefixes = ["Webkit", "Moz", "ms"],
    emptyStyle = document.createElement("div").style,
    vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName(name) {

    // Check for vendor prefixed names
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;

    while (i--) {
        name = cssPrefixes[i] + capName;
        if (name in emptyStyle) {
            return name;
        }
    }
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName(name) {
    var final = jQuery.cssProps[name] || vendorProps[name];

    if (final) {
        return final;
    }
    if (name in emptyStyle) {
        return name;
    }
    return vendorProps[name] = vendorPropName(name) || name;
}


var

    // Swappable if display is none or starts with table
    // except "table", "table-cell", or "table-caption"
    // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
    rdisplayswap = /^(none|table(?!-c[ea]).+)/,
    rcustomProp = /^--/,
    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
    cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
    };

function setPositiveNumber(_elem, value, subtract) {

    // Any relative (+/-) values have already been
    // normalized at this point
    var matches = rcssNum.exec(value);
    return matches ?

        // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") :
        value;
}

function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i = dimension === "width" ? 1 : 0,
        extra = 0,
        delta = 0;

    // Adjustment may not be necessary
    if (box === (isBorderBox ? "border" : "content")) {
        return 0;
    }

    for (; i < 4; i += 2) {

        // Both box models exclude margin
        if (box === "margin") {
            delta += jQuery.css(elem, box + cssExpand[i], true, styles);
        }

        // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
        if (!isBorderBox) {

            // Add padding
            delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

            // For "border" or "margin", add border
            if (box !== "padding") {
                delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);

                // But still keep track of it otherwise
            } else {
                extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }

            // If we get here with a border-box (content + padding + border), we're seeking "content" or
            // "padding" or "margin"
        } else {

            // For "content", subtract padding
            if (box === "content") {
                delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
            }

            // For "content" or "padding", subtract border
            if (box !== "margin") {
                delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
        }
    }

    // Account for positive content-box scroll gutter when requested by providing computedVal
    if (!isBorderBox && computedVal >= 0) {

        // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
        // Assuming integer scroll gutter, subtract the rest and round down
        delta += Math.max(0, Math.ceil(
            elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] -
            computedVal -
            delta -
            extra -
            0.5

            // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
            // Use an explicit zero to avoid NaN (gh-3964)
        )) || 0;
    }

    return delta;
}

function getWidthOrHeight(elem, dimension, extra) {

    // Start with computed style
    var styles = getStyles(elem),

        // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
        // Fake content-box until we know it's needed to know the true value.
        boxSizingNeeded = !support.boxSizingReliable() || extra,
        isBorderBox = boxSizingNeeded &&
            jQuery.css(elem, "boxSizing", false, styles) === "border-box",
        valueIsBorderBox = isBorderBox,

        val = curCSS(elem, dimension, styles),
        offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);

    // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.
    if (rnumnonpx.test(val)) {
        if (!extra) {
            return val;
        }
        val = "auto";
    }


    // Support: IE 9 - 11 only
    // Use offsetWidth/offsetHeight for when box sizing is unreliable.
    // In those cases, the computed value can be trusted to be border-box.
    if ((!support.boxSizingReliable() && isBorderBox ||

        // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !support.reliableTrDimensions() && nodeName(elem, "tr") ||

        // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        val === "auto" ||

        // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") &&

        // Make sure the element is visible & connected
        elem.getClientRects().length) {

        isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";

        // Where available, offsetWidth/offsetHeight approximate border box dimensions.
        // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
        // retrieved value as a content box dimension.
        valueIsBorderBox = offsetProp in elem;
        if (valueIsBorderBox) {
            val = elem[offsetProp];
        }
    }

    // Normalize "" and auto
    val = parseFloat(val) || 0;

    // Adjust for the element's box model
    return (val +
        boxModelAdjustment(
            elem,
            dimension,
            extra || (isBorderBox ? "border" : "content"),
            valueIsBorderBox,
            styles,

            // Provide the current computed size to request scroll gutter calculation (gh-3589)
            val
        )
    ) + "px";
}

jQuery.extend({

    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
        opacity: {
            get: function (elem, computed) {
                if (computed) {

                    // We should always get a number back from opacity
                    var ret = curCSS(elem, "opacity");
                    return ret === "" ? "1" : ret;
                }
            }
        }
    },

    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
        "animationIterationCount": true,
        "columnCount": true,
        "fillOpacity": true,
        "flexGrow": true,
        "flexShrink": true,
        "fontWeight": true,
        "gridArea": true,
        "gridColumn": true,
        "gridColumnEnd": true,
        "gridColumnStart": true,
        "gridRow": true,
        "gridRowEnd": true,
        "gridRowStart": true,
        "lineHeight": true,
        "opacity": true,
        "order": true,
        "orphans": true,
        "widows": true,
        "zIndex": true,
        "zoom": true
    },

    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},

    // Get and set the style property on a DOM Node
    style: function (elem, name, value, extra) {

        // Don't set styles on text and comment nodes
        if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return;
        }

        // Make sure that we're working with the right name
        var ret, type, hooks,
            origName = camelCase(name),
            isCustomProp = rcustomProp.test(name),
            style = elem.style;

        // Make sure that we're working with the right name. We don't
        // want to query the value if it is a CSS custom property
        // since they are user-defined.
        if (!isCustomProp) {
            name = finalPropName(origName);
        }

        // Gets hook for the prefixed version, then unprefixed version
        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

        // Check if we're setting a value
        if (value !== undefined) {
            type = typeof value;

            // Convert "+=" or "-=" to relative numbers (#7345)
            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);

                // Fixes bug #9237
                type = "number";
            }

            // Make sure that null and NaN values aren't set (#7116)
            if (value == null || value !== value) {
                return;
            }

            // If a number was passed in, add the unit (except for certain CSS properties)
            // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
            // "px" to a few hardcoded values.
            if (type === "number" && !isCustomProp) {
                value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
            }

            // background-* props affect original clone's values
            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                style[name] = "inherit";
            }

            // If a hook was provided, use that value, otherwise just set the specified value
            if (!hooks || !("set" in hooks) ||
                (value = hooks.set(elem, value, extra)) !== undefined) {

                if (isCustomProp) {
                    style.setProperty(name, value);
                } else {
                    style[name] = value;
                }
            }

        } else {

            // If a hook was provided get the non-computed value from there
            if (hooks && "get" in hooks &&
                (ret = hooks.get(elem, false, extra)) !== undefined) {

                return ret;
            }

            // Otherwise just get the value from the style object
            return style[name];
        }
    },

    css: function (elem, name, extra, styles) {
        var val, num, hooks,
            origName = camelCase(name),
            isCustomProp = rcustomProp.test(name);

        // Make sure that we're working with the right name. We don't
        // want to modify the value if it is a CSS custom property
        // since they are user-defined.
        if (!isCustomProp) {
            name = finalPropName(origName);
        }

        // Try prefixed name followed by the unprefixed name
        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

        // If a hook was provided get the computed value from there
        if (hooks && "get" in hooks) {
            val = hooks.get(elem, true, extra);
        }

        // Otherwise, if a way to get the computed value exists, use that
        if (val === undefined) {
            val = curCSS(elem, name, styles);
        }

        // Convert "normal" to computed value
        if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name];
        }

        // Make numeric if forced or a qualifier was provided and val looks numeric
        if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val;
        }

        return val;
    }
});

jQuery.each(["height", "width"], function (_i, dimension) {
    jQuery.cssHooks[dimension] = {
        get: function (elem, computed, extra) {
            if (computed) {

                // Certain elements can have dimension info if we invisibly show them
                // but it must have a current display style that would benefit
                return rdisplayswap.test(jQuery.css(elem, "display")) &&

                    // Support: Safari 8+
                    // Table columns in Safari have non-zero offsetWidth & zero
                    // getBoundingClientRect().width unless display is changed.
                    // Support: IE <=11 only
                    // Running getBoundingClientRect on a disconnected node
                    // in IE throws an error.
                    (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ?
                    swap(elem, cssShow, function () {
                        return getWidthOrHeight(elem, dimension, extra);
                    }) :
                    getWidthOrHeight(elem, dimension, extra);
            }
        },

        set: function (elem, value, extra) {
            var matches,
                styles = getStyles(elem),

                // Only read styles.position if the test has a chance to fail
                // to avoid forcing a reflow.
                scrollboxSizeBuggy = !support.scrollboxSize() &&
                    styles.position === "absolute",

                // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
                boxSizingNeeded = scrollboxSizeBuggy || extra,
                isBorderBox = boxSizingNeeded &&
                    jQuery.css(elem, "boxSizing", false, styles) === "border-box",
                subtract = extra ?
                    boxModelAdjustment(
                        elem,
                        dimension,
                        extra,
                        isBorderBox,
                        styles
                    ) :
                    0;

            // Account for unreliable border-box dimensions by comparing offset* to computed and
            // faking a content-box to get border and padding (gh-3699)
            if (isBorderBox && scrollboxSizeBuggy) {
                subtract -= Math.ceil(
                    elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] -
                    parseFloat(styles[dimension]) -
                    boxModelAdjustment(elem, dimension, "border", false, styles) -
                    0.5
                );
            }

            // Convert to pixels if value adjustment is needed
            if (subtract && (matches = rcssNum.exec(value)) &&
                (matches[3] || "px") !== "px") {

                elem.style[dimension] = value;
                value = jQuery.css(elem, dimension);
            }

            return setPositiveNumber(elem, value, subtract);
        }
    };
});

jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft,
    function (elem, computed) {
        if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) ||
                elem.getBoundingClientRect().left -
                swap(elem, { marginLeft: 0 }, function () {
                    return elem.getBoundingClientRect().left;
                })
            ) + "px";
        }
    }
);

// These hooks are used by animate to expand properties
jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
}, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
        expand: function (value) {
            var i = 0,
                expanded = {},

                // Assumes a single number if not a string
                parts = typeof value === "string" ? value.split(" ") : [value];

            for (; i < 4; i++) {
                expanded[prefix + cssExpand[i] + suffix] =
                    parts[i] || parts[i - 2] || parts[0];
            }

            return expanded;
        }
    };

    if (prefix !== "margin") {
        jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
});

jQuery.fn.extend({
    css: function (name, value) {
        return access(this, function (elem, name, value) {
            var styles, len,
                map = {},
                i = 0;

            if (Array.isArray(name)) {
                styles = getStyles(elem);
                len = name.length;

                for (; i < len; i++) {
                    map[name[i]] = jQuery.css(elem, name[i], false, styles);
                }

                return map;
            }

            return value !== undefined ?
                jQuery.style(elem, name, value) :
                jQuery.css(elem, name);
        }, name, value, arguments.length > 1);
    }
});


function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
}
jQuery.Tween = Tween;

Tween.prototype = {
    constructor: Tween,
    init: function (elem, options, prop, end, easing, unit) {
        this.elem = elem;
        this.prop = prop;
        this.easing = easing || jQuery.easing._default;
        this.options = options;
        this.start = this.now = this.cur();
        this.end = end;
        this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function () {
        var hooks = Tween.propHooks[this.prop];

        return hooks && hooks.get ?
            hooks.get(this) :
            Tween.propHooks._default.get(this);
    },
    run: function (percent) {
        var eased,
            hooks = Tween.propHooks[this.prop];

        if (this.options.duration) {
            this.pos = eased = jQuery.easing[this.easing](
                percent, this.options.duration * percent, 0, 1, this.options.duration
            );
        } else {
            this.pos = eased = percent;
        }
        this.now = (this.end - this.start) * eased + this.start;

        if (this.options.step) {
            this.options.step.call(this.elem, this.now, this);
        }

        if (hooks && hooks.set) {
            hooks.set(this);
        } else {
            Tween.propHooks._default.set(this);
        }
        return this;
    }
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
    _default: {
        get: function (tween) {
            var result;

            // Use a property on the element directly when it is not a DOM element,
            // or when there is no matching style property that exists.
            if (tween.elem.nodeType !== 1 ||
                tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                return tween.elem[tween.prop];
            }

            // Passing an empty string as a 3rd parameter to .css will automatically
            // attempt a parseFloat and fallback to a string if the parse fails.
            // Simple values such as "10px" are parsed to Float;
            // complex values such as "rotate(1rad)" are returned as-is.
            result = jQuery.css(tween.elem, tween.prop, "");

            // Empty strings, null, undefined and "auto" are converted to 0.
            return !result || result === "auto" ? 0 : result;
        },
        set: function (tween) {

            // Use step hook for back compat.
            // Use cssHook if its there.
            // Use .style if available and use plain properties where available.
            if (jQuery.fx.step[tween.prop]) {
                jQuery.fx.step[tween.prop](tween);
            } else if (tween.elem.nodeType === 1 && (
                jQuery.cssHooks[tween.prop] ||
                tween.elem.style[finalPropName(tween.prop)] != null)) {
                jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
            } else {
                tween.elem[tween.prop] = tween.now;
            }
        }
    }
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function (tween) {
        if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
        }
    }
};

jQuery.easing = {
    linear: function (p) {
        return p;
    },
    swing: function (p) {
        return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
    fxNow, inProgress,
    rfxtypes = /^(?:toggle|show|hide)$/,
    rrun = /queueHooks$/;

function schedule() {
    if (inProgress) {
        if (document.hidden === false && window.requestAnimationFrame) {
            window.requestAnimationFrame(schedule);
        } else {
            window.setTimeout(schedule, jQuery.fx.interval);
        }

        jQuery.fx.tick();
    }
}

// Animations created synchronously will run synchronously
function createFxNow() {
    window.setTimeout(function () {
        fxNow = undefined;
    });
    return (fxNow = Date.now());
}

// Generate parameters to create a standard animation
function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = { height: type };

    // If we include width, step value is 1 to do all cssExpand values,
    // otherwise step value is 2 to skip over Left and Right
    includeWidth = includeWidth ? 1 : 0;
    for (; i < 4; i += 2 - includeWidth) {
        which = cssExpand[i];
        attrs["margin" + which] = attrs["padding" + which] = type;
    }

    if (includeWidth) {
        attrs.opacity = attrs.width = type;
    }

    return attrs;
}

function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;
    for (; index < length; index++) {
        if ((tween = collection[index].call(animation, prop, value))) {

            // We're done with this property
            return tween;
        }
    }
}

function defaultPrefilter(elem, props, opts) {
    var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
        isBox = "width" in props || "height" in props,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHiddenWithinTree(elem),
        dataShow = dataPriv.get(elem, "fxshow");

    // Queue-skipping animations hijack the fx hooks
    if (!opts.queue) {
        hooks = jQuery._queueHooks(elem, "fx");
        if (hooks.unqueued == null) {
            hooks.unqueued = 0;
            oldfire = hooks.empty.fire;
            hooks.empty.fire = function () {
                if (!hooks.unqueued) {
                    oldfire();
                }
            };
        }
        hooks.unqueued++;

        anim.always(function () {

            // Ensure the complete handler is called before this completes
            anim.always(function () {
                hooks.unqueued--;
                if (!jQuery.queue(elem, "fx").length) {
                    hooks.empty.fire();
                }
            });
        });
    }

    // Detect show/hide animations
    for (prop in props) {
        value = props[prop];
        if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";
            if (value === (hidden ? "hide" : "show")) {

                // Pretend to be hidden if this is a "show" and
                // there is still data from a stopped show/hide
                if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                    hidden = true;

                    // Ignore all other no-op show/hide data
                } else {
                    continue;
                }
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
        }
    }

    // Bail out if this is a no-op like .hide().hide()
    propTween = !jQuery.isEmptyObject(props);
    if (!propTween && jQuery.isEmptyObject(orig)) {
        return;
    }

    // Restrict "overflow" and "display" styles during box animations
    if (isBox && elem.nodeType === 1) {

        // Support: IE <=9 - 11, Edge 12 - 15
        // Record all 3 overflow attributes because IE does not infer the shorthand
        // from identically-valued overflowX and overflowY and Edge just mirrors
        // the overflowX value there.
        opts.overflow = [style.overflow, style.overflowX, style.overflowY];

        // Identify a display type, preferring old show/hide data over the CSS cascade
        restoreDisplay = dataShow && dataShow.display;
        if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display");
        }
        display = jQuery.css(elem, "display");
        if (display === "none") {
            if (restoreDisplay) {
                display = restoreDisplay;
            } else {

                // Get nonempty value(s) by temporarily forcing visibility
                showHide([elem], true);
                restoreDisplay = elem.style.display || restoreDisplay;
                display = jQuery.css(elem, "display");
                showHide([elem]);
            }
        }

        // Animate inline elements as inline-block
        if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery.css(elem, "float") === "none") {

                // Restore the original display value at the end of pure show/hide animations
                if (!propTween) {
                    anim.done(function () {
                        style.display = restoreDisplay;
                    });
                    if (restoreDisplay == null) {
                        display = style.display;
                        restoreDisplay = display === "none" ? "" : display;
                    }
                }
                style.display = "inline-block";
            }
        }
    }

    if (opts.overflow) {
        style.overflow = "hidden";
        anim.always(function () {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
        });
    }

    // Implement show/hide animations
    propTween = false;
    for (prop in orig) {

        // General show/hide setup for this element animation
        if (!propTween) {
            if (dataShow) {
                if ("hidden" in dataShow) {
                    hidden = dataShow.hidden;
                }
            } else {
                dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
            }

            // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
            if (toggle) {
                dataShow.hidden = !hidden;
            }

            // Show elements before animating them
            if (hidden) {
                showHide([elem], true);
            }

            /* eslint-disable no-loop-func */

            anim.done(function () {

                /* eslint-enable no-loop-func */

                // The final step of a "hide" animation is actually hiding the element
                if (!hidden) {
                    showHide([elem]);
                }
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                    jQuery.style(elem, prop, orig[prop]);
                }
            });
        }

        // Per-property setup
        propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
        if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;
            if (hidden) {
                propTween.end = propTween.start;
                propTween.start = 0;
            }
        }
    }
}

function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks;

    // camelCase, specialEasing and expand cssHook pass
    for (index in props) {
        name = camelCase(index);
        easing = specialEasing[name];
        value = props[index];
        if (Array.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0];
        }

        if (index !== name) {
            props[name] = value;
            delete props[index];
        }

        hooks = jQuery.cssHooks[name];
        if (hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete props[name];

            // Not quite $.extend, this won't overwrite existing keys.
            // Reusing 'index' because we have the correct "name"
            for (index in value) {
                if (!(index in props)) {
                    props[index] = value[index];
                    specialEasing[index] = easing;
                }
            }
        } else {
            specialEasing[name] = easing;
        }
    }
}

function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function () {

            // Don't match elem in the :animated selector
            delete tick.elem;
        }),
        tick = function () {
            if (stopped) {
                return false;
            }
            var currentTime = fxNow || createFxNow(),
                remaining = Math.max(0, animation.startTime + animation.duration - currentTime),

                // Support: Android 2.3 only
                // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
                temp = remaining / animation.duration || 0,
                percent = 1 - temp,
                index = 0,
                length = animation.tweens.length;

            for (; index < length; index++) {
                animation.tweens[index].run(percent);
            }

            deferred.notifyWith(elem, [animation, percent, remaining]);

            // If there's more to do, yield
            if (percent < 1 && length) {
                return remaining;
            }

            // If this was an empty animation, synthesize a final progress notification
            if (!length) {
                deferred.notifyWith(elem, [animation, 1, 0]);
            }

            // Resolve the animation and report its conclusion
            deferred.resolveWith(elem, [animation]);
            return false;
        },
        animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
                specialEasing: {},
                easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function (prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end,
                    animation.opts.specialEasing[prop] || animation.opts.easing);
                animation.tweens.push(tween);
                return tween;
            },
            stop: function (gotoEnd) {
                var index = 0,

                    // If we are going to the end, we want to run all the tweens
                    // otherwise we skip this part
                    length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) {
                    return this;
                }
                stopped = true;
                for (; index < length; index++) {
                    animation.tweens[index].run(1);
                }

                // Resolve when we played the last frame; otherwise, reject
                if (gotoEnd) {
                    deferred.notifyWith(elem, [animation, 1, 0]);
                    deferred.resolveWith(elem, [animation, gotoEnd]);
                } else {
                    deferred.rejectWith(elem, [animation, gotoEnd]);
                }
                return this;
            }
        }),
        props = animation.props;

    propFilter(props, animation.opts.specialEasing);

    for (; index < length; index++) {
        result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
        if (result) {
            if (isFunction(result.stop)) {
                jQuery._queueHooks(animation.elem, animation.opts.queue).stop =
                    result.stop.bind(result);
            }
            return result;
        }
    }

    jQuery.map(props, createTween, animation);

    if (isFunction(animation.opts.start)) {
        animation.opts.start.call(elem, animation);
    }

    // Attach callbacks from options
    animation
        .progress(animation.opts.progress)
        .done(animation.opts.done, animation.opts.complete)
        .fail(animation.opts.fail)
        .always(animation.opts.always);

    jQuery.fx.timer(
        jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        })
    );

    return animation;
}

jQuery.Animation = jQuery.extend(Animation, {

    tweeners: {
        "*": [function (prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
        }]
    },

    tweener: function (props, callback) {
        if (isFunction(props)) {
            callback = props;
            props = ["*"];
        } else {
            props = props.match(rnothtmlwhite);
        }

        var prop,
            index = 0,
            length = props.length;

        for (; index < length; index++) {
            prop = props[index];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(callback);
        }
    },

    prefilters: [defaultPrefilter],

    prefilter: function (callback, prepend) {
        if (prepend) {
            Animation.prefilters.unshift(callback);
        } else {
            Animation.prefilters.push(callback);
        }
    }
});

jQuery.speed = function (speed, easing, fn) {
    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
        complete: fn || !fn && easing ||
            isFunction(speed) && speed,
        duration: speed,
        easing: fn && easing || easing && !isFunction(easing) && easing
    };

    // Go to the end state if fx are off
    if (jQuery.fx.off) {
        opt.duration = 0;

    } else {
        if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery.fx.speeds) {
                opt.duration = jQuery.fx.speeds[opt.duration];

            } else {
                opt.duration = jQuery.fx.speeds._default;
            }
        }
    }

    // Normalize opt.queue - true/undefined/null -> "fx"
    if (opt.queue == null || opt.queue === true) {
        opt.queue = "fx";
    }

    // Queueing
    opt.old = opt.complete;

    opt.complete = function () {
        if (isFunction(opt.old)) {
            opt.old.call(this);
        }

        if (opt.queue) {
            jQuery.dequeue(this, opt.queue);
        }
    };

    return opt;
};

jQuery.fn.extend({
    fadeTo: function (speed, to, easing, callback) {

        // Show any hidden elements after setting opacity to 0
        return this.filter(isHiddenWithinTree).css("opacity", 0).show()

            // Animate to the value specified
            .end().animate({ opacity: to }, speed, easing, callback);
    },
    animate: function (prop, speed, easing, callback) {
        var empty = jQuery.isEmptyObject(prop),
            optall = jQuery.speed(speed, easing, callback),
            doAnimation = function () {

                // Operate on a copy of prop so per-property easing won't be lost
                var anim = Animation(this, jQuery.extend({}, prop), optall);

                // Empty animations, or finishing resolves immediately
                if (empty || dataPriv.get(this, "finish")) {
                    anim.stop(true);
                }
            };

        doAnimation.finish = doAnimation;

        return empty || optall.queue === false ?
            this.each(doAnimation) :
            this.queue(optall.queue, doAnimation);
    },
    stop: function (type, clearQueue, gotoEnd) {
        var stopQueue = function (hooks) {
            var stop = hooks.stop;
            delete hooks.stop;
            stop(gotoEnd);
        };

        if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = undefined;
        }
        if (clearQueue) {
            this.queue(type || "fx", []);
        }

        return this.each(function () {
            var dequeue = true,
                index = type != null && type + "queueHooks",
                timers = jQuery.timers,
                data = dataPriv.get(this);

            if (index) {
                if (data[index] && data[index].stop) {
                    stopQueue(data[index]);
                }
            } else {
                for (index in data) {
                    if (data[index] && data[index].stop && rrun.test(index)) {
                        stopQueue(data[index]);
                    }
                }
            }

            for (index = timers.length; index--;) {
                if (timers[index].elem === this &&
                    (type == null || timers[index].queue === type)) {

                    timers[index].anim.stop(gotoEnd);
                    dequeue = false;
                    timers.splice(index, 1);
                }
            }

            // Start the next in the queue if the last step wasn't forced.
            // Timers currently will call their complete callbacks, which
            // will dequeue but only if they were gotoEnd.
            if (dequeue || !gotoEnd) {
                jQuery.dequeue(this, type);
            }
        });
    },
    finish: function (type) {
        if (type !== false) {
            type = type || "fx";
        }
        return this.each(function () {
            var index,
                data = dataPriv.get(this),
                queue = data[type + "queue"],
                hooks = data[type + "queueHooks"],
                timers = jQuery.timers,
                length = queue ? queue.length : 0;

            // Enable finishing flag on private data
            data.finish = true;

            // Empty the queue first
            jQuery.queue(this, type, []);

            if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
            }

            // Look for any active animations, and finish them
            for (index = timers.length; index--;) {
                if (timers[index].elem === this && timers[index].queue === type) {
                    timers[index].anim.stop(true);
                    timers.splice(index, 1);
                }
            }

            // Look for any animations in the old queue and finish them
            for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                    queue[index].finish.call(this);
                }
            }

            // Turn off finishing flag
            delete data.finish;
        });
    }
});

jQuery.each(["toggle", "show", "hide"], function (_i, name) {
    var cssFn = jQuery.fn[name];
    jQuery.fn[name] = function (speed, easing, callback) {
        return speed == null || typeof speed === "boolean" ?
            cssFn.apply(this, arguments) :
            this.animate(genFx(name, true), speed, easing, callback);
    };
});

// Generate shortcuts for custom animations
jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: { opacity: "show" },
    fadeOut: { opacity: "hide" },
    fadeToggle: { opacity: "toggle" }
}, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
        return this.animate(props, speed, easing, callback);
    };
});

jQuery.timers = [];
jQuery.fx.tick = function () {
    var timer,
        i = 0,
        timers = jQuery.timers;

    fxNow = Date.now();

    for (; i < timers.length; i++) {
        timer = timers[i];

        // Run the timer and safely remove it when done (allowing for external removal)
        if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
        }
    }

    if (!timers.length) {
        jQuery.fx.stop();
    }
    fxNow = undefined;
};

jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer);
    jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function () {
    if (inProgress) {
        return;
    }

    inProgress = true;
    schedule();
};

jQuery.fx.stop = function () {
    inProgress = null;
};

jQuery.fx.speeds = {
    slow: 600,
    fast: 200,

    // Default speed
    _default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";

    return this.queue(type, function (next, hooks) {
        var timeout = window.setTimeout(next, time);
        hooks.stop = function () {
            window.clearTimeout(timeout);
        };
    });
};


(function () {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));

    input.type = "checkbox";

    // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"
    support.checkOn = input.value !== "";

    // Support: IE <=11 only
    // Must access selectedIndex to make default options select
    support.optSelected = opt.selected;

    // Support: IE <=11 only
    // An input loses its value after becoming a radio
    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
})();


var boolHook,
    attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend({
    attr: function (name, value) {
        return access(this, jQuery.attr, name, value, arguments.length > 1);
    },

    removeAttr: function (name) {
        return this.each(function () {
            jQuery.removeAttr(this, name);
        });
    }
});

jQuery.extend({
    attr: function (elem, name, value) {
        var ret, hooks,
            nType = elem.nodeType;

        // Don't get/set attributes on text, comment and attribute nodes
        if (nType === 3 || nType === 8 || nType === 2) {
            return;
        }

        // Fallback to prop when attributes are not supported
        if (typeof elem.getAttribute === "undefined") {
            return jQuery.prop(elem, name, value);
        }

        // Attribute hooks are determined by the lowercase version
        // Grab necessary hook if one is defined
        if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            hooks = jQuery.attrHooks[name.toLowerCase()] ||
                (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
        }

        if (value !== undefined) {
            if (value === null) {
                jQuery.removeAttr(elem, name);
                return;
            }

            if (hooks && "set" in hooks &&
                (ret = hooks.set(elem, value, name)) !== undefined) {
                return ret;
            }

            elem.setAttribute(name, value + "");
            return value;
        }

        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
        }

        ret = jQuery.find.attr(elem, name);

        // Non-existent attributes return null, we normalize to undefined
        return ret == null ? undefined : ret;
    },

    attrHooks: {
        type: {
            set: function (elem, value) {
                if (!support.radioValue && value === "radio" &&
                    nodeName(elem, "input")) {
                    var val = elem.value;
                    elem.setAttribute("type", value);
                    if (val) {
                        elem.value = val;
                    }
                    return value;
                }
            }
        }
    },

    removeAttr: function (elem, value) {
        var name,
            i = 0,

            // Attribute names can contain non-HTML whitespace characters
            // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
            attrNames = value && value.match(rnothtmlwhite);

        if (attrNames && elem.nodeType === 1) {
            while ((name = attrNames[i++])) {
                elem.removeAttribute(name);
            }
        }
    }
});

// Hooks for boolean attributes
boolHook = {
    set: function (elem, value, name) {
        if (value === false) {

            // Remove boolean attributes when set to false
            jQuery.removeAttr(elem, name);
        } else {
            elem.setAttribute(name, name);
        }
        return name;
    }
};

jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (_i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;

    attrHandle[name] = function (elem, name, isXML) {
        var ret, handle,
            lowercaseName = name.toLowerCase();

        if (!isXML) {

            // Avoid an infinite loop by temporarily removing this function from the getter
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name, isXML) != null ?
                lowercaseName :
                null;
            attrHandle[lowercaseName] = handle;
        }
        return ret;
    };
});




var rfocusable = /^(?:input|select|textarea|button)$/i,
    rclickable = /^(?:a|area)$/i;

jQuery.fn.extend({
    prop: function (name, value) {
        return access(this, jQuery.prop, name, value, arguments.length > 1);
    },

    removeProp: function (name) {
        return this.each(function () {
            delete this[jQuery.propFix[name] || name];
        });
    }
});

jQuery.extend({
    prop: function (elem, name, value) {
        var ret, hooks,
            nType = elem.nodeType;

        // Don't get/set properties on text, comment and attribute nodes
        if (nType === 3 || nType === 8 || nType === 2) {
            return;
        }

        if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

            // Fix name and attach hooks
            name = jQuery.propFix[name] || name;
            hooks = jQuery.propHooks[name];
        }

        if (value !== undefined) {
            if (hooks && "set" in hooks &&
                (ret = hooks.set(elem, value, name)) !== undefined) {
                return ret;
            }

            return (elem[name] = value);
        }

        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
        }

        return elem[name];
    },

    propHooks: {
        tabIndex: {
            get: function (elem) {

                // Support: IE <=9 - 11 only
                // elem.tabIndex doesn't always return the
                // correct value when it hasn't been explicitly set
                // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                // Use proper attribute retrieval(#12072)
                var tabindex = jQuery.find.attr(elem, "tabindex");

                if (tabindex) {
                    return parseInt(tabindex, 10);
                }

                if (
                    rfocusable.test(elem.nodeName) ||
                    rclickable.test(elem.nodeName) &&
                    elem.href
                ) {
                    return 0;
                }

                return -1;
            }
        }
    },

    propFix: {
        "for": "htmlFor",
        "class": "className"
    }
});

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if (!support.optSelected) {
    jQuery.propHooks.selected = {
        get: function (elem) {

            /* eslint no-unused-expressions: "off" */

            var parent = elem.parentNode;
            if (parent && parent.parentNode) {
                parent.parentNode.selectedIndex;
            }
            return null;
        },
        set: function (elem) {

            /* eslint no-unused-expressions: "off" */

            var parent = elem.parentNode;
            if (parent) {
                parent.selectedIndex;

                if (parent.parentNode) {
                    parent.parentNode.selectedIndex;
                }
            }
        }
    };
}

jQuery.each([
    "tabIndex",
    "readOnly",
    "maxLength",
    "cellSpacing",
    "cellPadding",
    "rowSpan",
    "colSpan",
    "useMap",
    "frameBorder",
    "contentEditable"
], function () {
    jQuery.propFix[this.toLowerCase()] = this;
});




// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
}


function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
}

function classesToArray(value) {
    if (Array.isArray(value)) {
        return value;
    }
    if (typeof value === "string") {
        return value.match(rnothtmlwhite) || [];
    }
    return [];
}

jQuery.fn.extend({
    addClass: function (value) {
        var classes, elem, cur, curValue, clazz, j, finalValue,
            i = 0;

        if (isFunction(value)) {
            return this.each(function (j) {
                jQuery(this).addClass(value.call(this, j, getClass(this)));
            });
        }

        classes = classesToArray(value);

        if (classes.length) {
            while ((elem = this[i++])) {
                curValue = getClass(elem);
                cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");

                if (cur) {
                    j = 0;
                    while ((clazz = classes[j++])) {
                        if (cur.indexOf(" " + clazz + " ") < 0) {
                            cur += clazz + " ";
                        }
                    }

                    // Only assign if different to avoid unneeded rendering.
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) {
                        elem.setAttribute("class", finalValue);
                    }
                }
            }
        }

        return this;
    },

    removeClass: function (value) {
        var classes, elem, cur, curValue, clazz, j, finalValue,
            i = 0;

        if (isFunction(value)) {
            return this.each(function (j) {
                jQuery(this).removeClass(value.call(this, j, getClass(this)));
            });
        }

        if (!arguments.length) {
            return this.attr("class", "");
        }

        classes = classesToArray(value);

        if (classes.length) {
            while ((elem = this[i++])) {
                curValue = getClass(elem);

                // This expression is here for better compressibility (see addClass)
                cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");

                if (cur) {
                    j = 0;
                    while ((clazz = classes[j++])) {

                        // Remove *all* instances
                        while (cur.indexOf(" " + clazz + " ") > -1) {
                            cur = cur.replace(" " + clazz + " ", " ");
                        }
                    }

                    // Only assign if different to avoid unneeded rendering.
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) {
                        elem.setAttribute("class", finalValue);
                    }
                }
            }
        }

        return this;
    },

    toggleClass: function (value, stateVal) {
        var type = typeof value,
            isValidValue = type === "string" || Array.isArray(value);

        if (typeof stateVal === "boolean" && isValidValue) {
            return stateVal ? this.addClass(value) : this.removeClass(value);
        }

        if (isFunction(value)) {
            return this.each(function (i) {
                jQuery(this).toggleClass(
                    value.call(this, i, getClass(this), stateVal),
                    stateVal
                );
            });
        }

        return this.each(function () {
            var className, i, self, classNames;

            if (isValidValue) {

                // Toggle individual class names
                i = 0;
                self = jQuery(this);
                classNames = classesToArray(value);

                while ((className = classNames[i++])) {

                    // Check each className given, space separated list
                    if (self.hasClass(className)) {
                        self.removeClass(className);
                    } else {
                        self.addClass(className);
                    }
                }

                // Toggle whole class name
            } else if (value === undefined || type === "boolean") {
                className = getClass(this);
                if (className) {

                    // Store className if set
                    dataPriv.set(this, "__className__", className);
                }

                // If the element has a class name or if we're passed `false`,
                // then remove the whole classname (if there was one, the above saved it).
                // Otherwise bring back whatever was previously saved (if anything),
                // falling back to the empty string if nothing was stored.
                if (this.setAttribute) {
                    this.setAttribute("class",
                        className || value === false ?
                            "" :
                            dataPriv.get(this, "__className__") || ""
                    );
                }
            }
        });
    },

    hasClass: function (selector) {
        var className, elem,
            i = 0;

        className = " " + selector + " ";
        while ((elem = this[i++])) {
            if (elem.nodeType === 1 &&
                (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                return true;
            }
        }

        return false;
    }
});




var rreturn = /\r/g;

jQuery.fn.extend({
    val: function (value) {
        var hooks, ret, valueIsFunction,
            elem = this[0];

        if (!arguments.length) {
            if (elem) {
                hooks = jQuery.valHooks[elem.type] ||
                    jQuery.valHooks[elem.nodeName.toLowerCase()];

                if (hooks &&
                    "get" in hooks &&
                    (ret = hooks.get(elem, "value")) !== undefined
                ) {
                    return ret;
                }

                ret = elem.value;

                // Handle most common string cases
                if (typeof ret === "string") {
                    return ret.replace(rreturn, "");
                }

                // Handle cases where value is null/undef or number
                return ret == null ? "" : ret;
            }

            return;
        }

        valueIsFunction = isFunction(value);

        return this.each(function (i) {
            var val;

            if (this.nodeType !== 1) {
                return;
            }

            if (valueIsFunction) {
                val = value.call(this, i, jQuery(this).val());
            } else {
                val = value;
            }

            // Treat null/undefined as ""; convert numbers to string
            if (val == null) {
                val = "";

            } else if (typeof val === "number") {
                val += "";

            } else if (Array.isArray(val)) {
                val = jQuery.map(val, function (value) {
                    return value == null ? "" : value + "";
                });
            }

            hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

            // If set returns undefined, fall back to normal setting
            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                this.value = val;
            }
        });
    }
});

jQuery.extend({
    valHooks: {
        option: {
            get: function (elem) {

                var val = jQuery.find.attr(elem, "value");
                return val != null ?
                    val :

                    // Support: IE <=10 - 11 only
                    // option.text throws exceptions (#14686, #14858)
                    // Strip and collapse whitespace
                    // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                    stripAndCollapse(jQuery.text(elem));
            }
        },
        select: {
            get: function (elem) {
                var value, option, i,
                    options = elem.options,
                    index = elem.selectedIndex,
                    one = elem.type === "select-one",
                    values = one ? null : [],
                    max = one ? index + 1 : options.length;

                if (index < 0) {
                    i = max;

                } else {
                    i = one ? index : 0;
                }

                // Loop through all the selected options
                for (; i < max; i++) {
                    option = options[i];

                    // Support: IE <=9 only
                    // IE8-9 doesn't update selected after form reset (#2551)
                    if ((option.selected || i === index) &&

                        // Don't return options that are disabled or in a disabled optgroup
                        !option.disabled &&
                        (!option.parentNode.disabled ||
                            !nodeName(option.parentNode, "optgroup"))) {

                        // Get the specific value for the option
                        value = jQuery(option).val();

                        // We don't need an array for one selects
                        if (one) {
                            return value;
                        }

                        // Multi-Selects return an array
                        values.push(value);
                    }
                }

                return values;
            },

            set: function (elem, value) {
                var optionSet, option,
                    options = elem.options,
                    values = jQuery.makeArray(value),
                    i = options.length;

                while (i--) {
                    option = options[i];

                    /* eslint-disable no-cond-assign */

                    if (option.selected =
                        jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1
                    ) {
                        optionSet = true;
                    }

                    /* eslint-enable no-cond-assign */
                }

                // Force browsers to behave consistently when non-matching value is set
                if (!optionSet) {
                    elem.selectedIndex = -1;
                }
                return values;
            }
        }
    }
});

// Radios and checkboxes getter/setter
jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = {
        set: function (elem, value) {
            if (Array.isArray(value)) {
                return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
            }
        }
    };
    if (!support.checkOn) {
        jQuery.valHooks[this].get = function (elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
        };
    }
});




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
    stopPropagationCallback = function (e) {
        e.stopPropagation();
    };

jQuery.extend(jQuery.event, {

    trigger: function (event, data, elem, onlyHandlers) {

        var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
            eventPath = [elem || document],
            type = hasOwn.call(event, "type") ? event.type : event,
            namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

        cur = lastElement = tmp = elem = elem || document;

        // Don't do events on text and comment nodes
        if (elem.nodeType === 3 || elem.nodeType === 8) {
            return;
        }

        // focus/blur morphs to focusin/out; ensure we're not firing them right now
        if (rfocusMorph.test(type + jQuery.event.triggered)) {
            return;
        }

        if (type.indexOf(".") > -1) {

            // Namespaced trigger; create a regexp to match event type in handle()
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort();
        }
        ontype = type.indexOf(":") < 0 && "on" + type;

        // Caller can pass in a jQuery.Event object, Object, or just an event type string
        event = event[jQuery.expando] ?
            event :
            new jQuery.Event(type, typeof event === "object" && event);

        // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
        event.isTrigger = onlyHandlers ? 2 : 3;
        event.namespace = namespaces.join(".");
        event.rnamespace = event.namespace ?
            new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") :
            null;

        // Clean up the event in case it is being reused
        event.result = undefined;
        if (!event.target) {
            event.target = elem;
        }

        // Clone any incoming data and prepend the event, creating the handler arg list
        data = data == null ?
            [event] :
            jQuery.makeArray(data, [event]);

        // Allow special events to draw outside the lines
        special = jQuery.event.special[type] || {};
        if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return;
        }

        // Determine event propagation path in advance, per W3C events spec (#9951)
        // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
        if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {

            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
            }
            for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
            }

            // Only add window if we got to document (e.g., not plain obj or detached DOM)
            if (tmp === (elem.ownerDocument || document)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window);
            }
        }

        // Fire handlers on the event path
        i = 0;
        while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
            lastElement = cur;
            event.type = i > 1 ?
                bubbleType :
                special.bindType || type;

            // jQuery handler
            handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] &&
                dataPriv.get(cur, "handle");
            if (handle) {
                handle.apply(cur, data);
            }

            // Native handler
            handle = ontype && cur[ontype];
            if (handle && handle.apply && acceptData(cur)) {
                event.result = handle.apply(cur, data);
                if (event.result === false) {
                    event.preventDefault();
                }
            }
        }
        event.type = type;

        // If nobody prevented the default action, do it now
        if (!onlyHandlers && !event.isDefaultPrevented()) {

            if ((!special._default ||
                special._default.apply(eventPath.pop(), data) === false) &&
                acceptData(elem)) {

                // Call a native DOM method on the target with the same name as the event.
                // Don't do default actions on window, that's where global variables be (#6170)
                if (ontype && isFunction(elem[type]) && !isWindow(elem)) {

                    // Don't re-trigger an onFOO event when we call its FOO() method
                    tmp = elem[ontype];

                    if (tmp) {
                        elem[ontype] = null;
                    }

                    // Prevent re-triggering of the same event, since we already bubbled it above
                    jQuery.event.triggered = type;

                    if (event.isPropagationStopped()) {
                        lastElement.addEventListener(type, stopPropagationCallback);
                    }

                    elem[type]();

                    if (event.isPropagationStopped()) {
                        lastElement.removeEventListener(type, stopPropagationCallback);
                    }

                    jQuery.event.triggered = undefined;

                    if (tmp) {
                        elem[ontype] = tmp;
                    }
                }
            }
        }

        return event.result;
    },

    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function (type, elem, event) {
        var e = jQuery.extend(
            new jQuery.Event(),
            event,
            {
                type: type,
                isSimulated: true
            }
        );

        jQuery.event.trigger(e, null, elem);
    }

});

jQuery.fn.extend({

    trigger: function (type, data) {
        return this.each(function () {
            jQuery.event.trigger(type, data, this);
        });
    },
    triggerHandler: function (type, data) {
        var elem = this[0];
        if (elem) {
            return jQuery.event.trigger(type, data, elem, true);
        }
    }
});


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if (!support.focusin) {
    jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

        // Attach a single capturing handler on the document while someone wants focusin/focusout
        var handler = function (event) {
            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
        };

        jQuery.event.special[fix] = {
            setup: function () {

                // Handle: regular nodes (via `this.ownerDocument`), window
                // (via `this.document`) & document (via `this`).
                var doc = this.ownerDocument || this.document || this,
                    attaches = dataPriv.access(doc, fix);

                if (!attaches) {
                    doc.addEventListener(orig, handler, true);
                }
                dataPriv.access(doc, fix, (attaches || 0) + 1);
            },
            teardown: function () {
                var doc = this.ownerDocument || this.document || this,
                    attaches = dataPriv.access(doc, fix) - 1;

                if (!attaches) {
                    doc.removeEventListener(orig, handler, true);
                    dataPriv.remove(doc, fix);

                } else {
                    dataPriv.access(doc, fix, attaches);
                }
            }
        };
    });
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = (/\?/);



// Cross-browser xml parsing
jQuery.parseXML = function (data) {
    var xml, parserErrorElem;
    if (!data || typeof data !== "string") {
        return null;
    }

    // Support: IE 9 - 11 only
    // IE throws on parseFromString with invalid input.
    try {
        xml = (new window.DOMParser()).parseFromString(data, "text/xml");
    } catch (e) { }

    parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
    if (!xml || parserErrorElem) {
        jQuery.error("Invalid XML: " + (
            parserErrorElem ?
                jQuery.map(parserErrorElem.childNodes, function (el) {
                    return el.textContent;
                }).join("\n") :
                data
        ));
    }
    return xml;
};


var
    rbracket = /\[\]$/,
    rCRLF = /\r?\n/g,
    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
    rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams(prefix, obj, traditional, add) {
    var name;

    if (Array.isArray(obj)) {

        // Serialize array item.
        jQuery.each(obj, function (i, v) {
            if (traditional || rbracket.test(prefix)) {

                // Treat each array item as a scalar.
                add(prefix, v);

            } else {

                // Item is non-scalar (array or object), encode its numeric index.
                buildParams(
                    prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                    v,
                    traditional,
                    add
                );
            }
        });

    } else if (!traditional && toType(obj) === "object") {

        // Serialize object item.
        for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
        }

    } else {

        // Serialize scalar item.
        add(prefix, obj);
    }
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function (a, traditional) {
    var prefix,
        s = [],
        add = function (key, valueOrFunction) {

            // If value is a function, invoke it and use its return value
            var value = isFunction(valueOrFunction) ?
                valueOrFunction() :
                valueOrFunction;

            s[s.length] = encodeURIComponent(key) + "=" +
                encodeURIComponent(value == null ? "" : value);
        };

    if (a == null) {
        return "";
    }

    // If an array was passed in, assume that it is an array of form elements.
    if (Array.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {

        // Serialize the form elements
        jQuery.each(a, function () {
            add(this.name, this.value);
        });

    } else {

        // If traditional, encode the "old" way (the way 1.3.2 or older
        // did it), otherwise encode params recursively.
        for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add);
        }
    }

    // Return the resulting serialization
    return s.join("&");
};

jQuery.fn.extend({
    serialize: function () {
        return jQuery.param(this.serializeArray());
    },
    serializeArray: function () {
        return this.map(function () {

            // Can add propHook for "elements" to filter or add form elements
            var elements = jQuery.prop(this, "elements");
            return elements ? jQuery.makeArray(elements) : this;
        }).filter(function () {
            var type = this.type;

            // Use .is( ":disabled" ) so that fieldset[disabled] works
            return this.name && !jQuery(this).is(":disabled") &&
                rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) &&
                (this.checked || !rcheckableType.test(type));
        }).map(function (_i, elem) {
            var val = jQuery(this).val();

            if (val == null) {
                return null;
            }

            if (Array.isArray(val)) {
                return jQuery.map(val, function (val) {
                    return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
                });
            }

            return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
        }).get();
    }
});


var
    r20 = /%20/g,
    rhash = /#.*$/,
    rantiCache = /([?&])_=[^&]*/,
    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

    // #7653, #8125, #8152: local protocol detection
    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    rnoContent = /^(?:GET|HEAD)$/,
    rprotocol = /^\/\//,

    /* Prefilters
     * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
     * 2) These are called:
     *    - BEFORE asking for a transport
     *    - AFTER param serialization (s.data is a string if s.processData is true)
     * 3) key is the dataType
     * 4) the catchall symbol "*" can be used
     * 5) execution will start with transport dataType and THEN continue down to "*" if needed
     */
    prefilters = {},

    /* Transports bindings
     * 1) key is the dataType
     * 2) the catchall symbol "*" can be used
     * 3) selection will start with transport dataType and THEN go to "*" if needed
     */
    transports = {},

    // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
    allTypes = "*/".concat("*"),

    // Anchor tag for parsing the document origin
    originAnchor = document.createElement("a");

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports(structure) {

    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {

        if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*";
        }

        var dataType,
            i = 0,
            dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

        if (isFunction(func)) {

            // For each dataType in the dataTypeExpression
            while ((dataType = dataTypes[i++])) {

                // Prepend if requested
                if (dataType[0] === "+") {
                    dataType = dataType.slice(1) || "*";
                    (structure[dataType] = structure[dataType] || []).unshift(func);

                    // Otherwise append
                } else {
                    (structure[dataType] = structure[dataType] || []).push(func);
                }
            }
        }
    };
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

    var inspected = {},
        seekingTransport = (structure === transports);

    function inspect(dataType) {
        var selected;
        inspected[dataType] = true;
        jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            if (typeof dataTypeOrTransport === "string" &&
                !seekingTransport && !inspected[dataTypeOrTransport]) {

                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
            } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
            }
        });
        return selected;
    }

    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend(target, src) {
    var key, deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};

    for (key in src) {
        if (src[key] !== undefined) {
            (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
        }
    }
    if (deep) {
        jQuery.extend(true, target, deep);
    }

    return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses(s, jqXHR, responses) {

    var ct, type, finalDataType, firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes;

    // Remove auto dataType and get content-type in the process
    while (dataTypes[0] === "*") {
        dataTypes.shift();
        if (ct === undefined) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
        }
    }

    // Check if we're dealing with a known content-type
    if (ct) {
        for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
            }
        }
    }

    // Check to see if we have a response for the expected dataType
    if (dataTypes[0] in responses) {
        finalDataType = dataTypes[0];
    } else {

        // Try convertible dataTypes
        for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
            }
            if (!firstDataType) {
                firstDataType = type;
            }
        }

        // Or just use first one
        finalDataType = finalDataType || firstDataType;
    }

    // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response
    if (finalDataType) {
        if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType);
        }
        return responses[finalDataType];
    }
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2, current, conv, tmp, prev,
        converters = {},

        // Work with a copy of dataTypes in case we need to modify it for conversion
        dataTypes = s.dataTypes.slice();

    // Create converters map with lowercased keys
    if (dataTypes[1]) {
        for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv];
        }
    }

    current = dataTypes.shift();

    // Convert to each sequential dataType
    while (current) {

        if (s.responseFields[current]) {
            jqXHR[s.responseFields[current]] = response;
        }

        // Apply the dataFilter if provided
        if (!prev && isSuccess && s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
        }

        prev = current;
        current = dataTypes.shift();

        if (current) {

            // There's only work to do if current dataType is non-auto
            if (current === "*") {

                current = prev;

                // Convert response if prev dataType is non-auto and differs from current
            } else if (prev !== "*" && prev !== current) {

                // Seek a direct converter
                conv = converters[prev + " " + current] || converters["* " + current];

                // If none found, seek a pair
                if (!conv) {
                    for (conv2 in converters) {

                        // If conv2 outputs current
                        tmp = conv2.split(" ");
                        if (tmp[1] === current) {

                            // If prev can be converted to accepted input
                            conv = converters[prev + " " + tmp[0]] ||
                                converters["* " + tmp[0]];
                            if (conv) {

                                // Condense equivalence converters
                                if (conv === true) {
                                    conv = converters[conv2];

                                    // Otherwise, insert the intermediate dataType
                                } else if (converters[conv2] !== true) {
                                    current = tmp[0];
                                    dataTypes.unshift(tmp[1]);
                                }
                                break;
                            }
                        }
                    }
                }

                // Apply converter (if not an equivalence)
                if (conv !== true) {

                    // Unless errors are allowed to bubble, catch and return them
                    if (conv && s.throws) {
                        response = conv(response);
                    } else {
                        try {
                            response = conv(response);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: conv ? e : "No conversion from " + prev + " to " + current
                            };
                        }
                    }
                }
            }
        }
    }

    return { state: "success", data: response };
}

jQuery.extend({

    // Counter for holding the number of active queries
    active: 0,

    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},

    ajaxSettings: {
        url: location.href,
        type: "GET",
        isLocal: rlocalProtocol.test(location.protocol),
        global: true,
        processData: true,
        async: true,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",

        /*
        timeout: 0,
        data: null,
        dataType: null,
        username: null,
        password: null,
        cache: null,
        throws: false,
        traditional: false,
        headers: {},
        */

        accepts: {
            "*": allTypes,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
        },

        contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
        },

        responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
        },

        // Data converters
        // Keys separate source (or catchall "*") and destination types with a single space
        converters: {

            // Convert anything to text
            "* text": String,

            // Text to html (true = no transformation)
            "text html": true,

            // Evaluate text as a json expression
            "text json": JSON.parse,

            // Parse text as xml
            "text xml": jQuery.parseXML
        },

        // For options that shouldn't be deep extended:
        // you can add your own custom options here if
        // and when you create one that shouldn't be
        // deep extended (see ajaxExtend)
        flatOptions: {
            url: true,
            context: true
        }
    },

    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function (target, settings) {
        return settings ?

            // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

            // Extending ajaxSettings
            ajaxExtend(jQuery.ajaxSettings, target);
    },

    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),

    // Main method
    ajax: function (url, options) {

        // If url is an object, simulate pre-1.5 signature
        if (typeof url === "object") {
            options = url;
            url = undefined;
        }

        // Force options to be an object
        options = options || {};

        var transport,

            // URL without anti-cache param
            cacheURL,

            // Response headers
            responseHeadersString,
            responseHeaders,

            // timeout handle
            timeoutTimer,

            // Url cleanup var
            urlAnchor,

            // Request state (becomes false upon send and true upon completion)
            completed,

            // To know if global events are to be dispatched
            fireGlobals,

            // Loop variable
            i,

            // uncached part of the url
            uncached,

            // Create the final options object
            s = jQuery.ajaxSetup({}, options),

            // Callbacks context
            callbackContext = s.context || s,

            // Context for global events is callbackContext if it is a DOM node or jQuery collection
            globalEventContext = s.context &&
                (callbackContext.nodeType || callbackContext.jquery) ?
                jQuery(callbackContext) :
                jQuery.event,

            // Deferreds
            deferred = jQuery.Deferred(),
            completeDeferred = jQuery.Callbacks("once memory"),

            // Status-dependent callbacks
            statusCode = s.statusCode || {},

            // Headers (they are sent all at once)
            requestHeaders = {},
            requestHeadersNames = {},

            // Default abort message
            strAbort = "canceled",

            // Fake xhr
            jqXHR = {
                readyState: 0,

                // Builds headers hashtable if needed
                getResponseHeader: function (key) {
                    var match;
                    if (completed) {
                        if (!responseHeaders) {
                            responseHeaders = {};
                            while ((match = rheaders.exec(responseHeadersString))) {
                                responseHeaders[match[1].toLowerCase() + " "] =
                                    (responseHeaders[match[1].toLowerCase() + " "] || [])
                                        .concat(match[2]);
                            }
                        }
                        match = responseHeaders[key.toLowerCase() + " "];
                    }
                    return match == null ? null : match.join(", ");
                },

                // Raw string
                getAllResponseHeaders: function () {
                    return completed ? responseHeadersString : null;
                },

                // Caches the header
                setRequestHeader: function (name, value) {
                    if (completed == null) {
                        name = requestHeadersNames[name.toLowerCase()] =
                            requestHeadersNames[name.toLowerCase()] || name;
                        requestHeaders[name] = value;
                    }
                    return this;
                },

                // Overrides response content-type header
                overrideMimeType: function (type) {
                    if (completed == null) {
                        s.mimeType = type;
                    }
                    return this;
                },

                // Status-dependent callbacks
                statusCode: function (map) {
                    var code;
                    if (map) {
                        if (completed) {

                            // Execute the appropriate callbacks
                            jqXHR.always(map[jqXHR.status]);
                        } else {

                            // Lazy-add the new callbacks in a way that preserves old ones
                            for (code in map) {
                                statusCode[code] = [statusCode[code], map[code]];
                            }
                        }
                    }
                    return this;
                },

                // Cancel the request
                abort: function (statusText) {
                    var finalText = statusText || strAbort;
                    if (transport) {
                        transport.abort(finalText);
                    }
                    done(0, finalText);
                    return this;
                }
            };

        // Attach deferreds
        deferred.promise(jqXHR);

        // Add protocol if not provided (prefilters might expect it)
        // Handle falsy url in the settings object (#10093: consistency with old signature)
        // We also use the url parameter if available
        s.url = ((url || s.url || location.href) + "")
            .replace(rprotocol, location.protocol + "//");

        // Alias method option to type as per ticket #12004
        s.type = options.method || options.type || s.method || s.type;

        // Extract dataTypes list
        s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];

        // A cross-domain request is in order when the origin doesn't match the current origin.
        if (s.crossDomain == null) {
            urlAnchor = document.createElement("a");

            // Support: IE <=8 - 11, Edge 12 - 15
            // IE throws exception on accessing the href property if url is malformed,
            // e.g. http://example.com:80x/
            try {
                urlAnchor.href = s.url;

                // Support: IE <=8 - 11 only
                // Anchor's host property isn't correctly set when s.url is relative
                urlAnchor.href = urlAnchor.href;
                s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
                    urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (e) {

                // If there is an error parsing the URL, assume it is crossDomain,
                // it can be rejected by the transport if it is invalid
                s.crossDomain = true;
            }
        }

        // Convert data if not already a string
        if (s.data && s.processData && typeof s.data !== "string") {
            s.data = jQuery.param(s.data, s.traditional);
        }

        // Apply prefilters
        inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

        // If request was aborted inside a prefilter, stop there
        if (completed) {
            return jqXHR;
        }

        // We can fire global events as of now if asked to
        // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
        fireGlobals = jQuery.event && s.global;

        // Watch for a new set of requests
        if (fireGlobals && jQuery.active++ === 0) {
            jQuery.event.trigger("ajaxStart");
        }

        // Uppercase the type
        s.type = s.type.toUpperCase();

        // Determine if request has content
        s.hasContent = !rnoContent.test(s.type);

        // Save the URL in case we're toying with the If-Modified-Since
        // and/or If-None-Match header later on
        // Remove hash to simplify url manipulation
        cacheURL = s.url.replace(rhash, "");

        // More options handling for requests with no content
        if (!s.hasContent) {

            // Remember the hash so we can put it back
            uncached = s.url.slice(cacheURL.length);

            // If data is available and should be processed, append data to url
            if (s.data && (s.processData || typeof s.data === "string")) {
                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;

                // #9682: remove data so that it's not used in an eventual retry
                delete s.data;
            }

            // Add or update anti-cache param if needed
            if (s.cache === false) {
                cacheURL = cacheURL.replace(rantiCache, "$1");
                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + (nonce.guid++) +
                    uncached;
            }

            // Put hash and anti-cache on the URL that will be requested (gh-1732)
            s.url = cacheURL + uncached;

            // Change '%20' to '+' if this is encoded form body content (gh-2658)
        } else if (s.data && s.processData &&
            (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s.data = s.data.replace(r20, "+");
        }

        // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
        if (s.ifModified) {
            if (jQuery.lastModified[cacheURL]) {
                jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
            }
            if (jQuery.etag[cacheURL]) {
                jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
            }
        }

        // Set the correct header, if data is being sent
        if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType);
        }

        // Set the Accepts header for the server, depending on the dataType
        jqXHR.setRequestHeader(
            "Accept",
            s.dataTypes[0] && s.accepts[s.dataTypes[0]] ?
                s.accepts[s.dataTypes[0]] +
                (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") :
                s.accepts["*"]
        );

        // Check for headers option
        for (i in s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i]);
        }

        // Allow custom headers/mimetypes and early abort
        if (s.beforeSend &&
            (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {

            // Abort if not done already and return
            return jqXHR.abort();
        }

        // Aborting is no longer a cancellation
        strAbort = "abort";

        // Install callbacks on deferreds
        completeDeferred.add(s.complete);
        jqXHR.done(s.success);
        jqXHR.fail(s.error);

        // Get transport
        transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

        // If no transport, we auto-abort
        if (!transport) {
            done(-1, "No Transport");
        } else {
            jqXHR.readyState = 1;

            // Send global event
            if (fireGlobals) {
                globalEventContext.trigger("ajaxSend", [jqXHR, s]);
            }

            // If request was aborted inside ajaxSend, stop there
            if (completed) {
                return jqXHR;
            }

            // Timeout
            if (s.async && s.timeout > 0) {
                timeoutTimer = window.setTimeout(function () {
                    jqXHR.abort("timeout");
                }, s.timeout);
            }

            try {
                completed = false;
                transport.send(requestHeaders, done);
            } catch (e) {

                // Rethrow post-completion exceptions
                if (completed) {
                    throw e;
                }

                // Propagate others as results
                done(-1, e);
            }
        }

        // Callback for when everything is done
        function done(status, nativeStatusText, responses, headers) {
            var isSuccess, success, error, response, modified,
                statusText = nativeStatusText;

            // Ignore repeat invocations
            if (completed) {
                return;
            }

            completed = true;

            // Clear timeout if it exists
            if (timeoutTimer) {
                window.clearTimeout(timeoutTimer);
            }

            // Dereference transport for early garbage collection
            // (no matter how long the jqXHR object will be used)
            transport = undefined;

            // Cache response headers
            responseHeadersString = headers || "";

            // Set readyState
            jqXHR.readyState = status > 0 ? 4 : 0;

            // Determine if successful
            isSuccess = status >= 200 && status < 300 || status === 304;

            // Get response data
            if (responses) {
                response = ajaxHandleResponses(s, jqXHR, responses);
            }

            // Use a noop converter for missing script but not if jsonp
            if (!isSuccess &&
                jQuery.inArray("script", s.dataTypes) > -1 &&
                jQuery.inArray("json", s.dataTypes) < 0) {
                s.converters["text script"] = function () { };
            }

            // Convert no matter what (that way responseXXX fields are always set)
            response = ajaxConvert(s, response, jqXHR, isSuccess);

            // If successful, handle type chaining
            if (isSuccess) {

                // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                if (s.ifModified) {
                    modified = jqXHR.getResponseHeader("Last-Modified");
                    if (modified) {
                        jQuery.lastModified[cacheURL] = modified;
                    }
                    modified = jqXHR.getResponseHeader("etag");
                    if (modified) {
                        jQuery.etag[cacheURL] = modified;
                    }
                }

                // if no content
                if (status === 204 || s.type === "HEAD") {
                    statusText = "nocontent";

                    // if not modified
                } else if (status === 304) {
                    statusText = "notmodified";

                    // If we have data, let's convert it
                } else {
                    statusText = response.state;
                    success = response.data;
                    error = response.error;
                    isSuccess = !error;
                }
            } else {

                // Extract error from statusText and normalize for non-aborts
                error = statusText;
                if (status || !statusText) {
                    statusText = "error";
                    if (status < 0) {
                        status = 0;
                    }
                }
            }

            // Set data for the fake xhr object
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";

            // Success/Error
            if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
            } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
            }

            // Status-dependent callbacks
            jqXHR.statusCode(statusCode);
            statusCode = undefined;

            if (fireGlobals) {
                globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError",
                    [jqXHR, s, isSuccess ? success : error]);
            }

            // Complete
            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

            if (fireGlobals) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

                // Handle the global AJAX counter
                if (!(--jQuery.active)) {
                    jQuery.event.trigger("ajaxStop");
                }
            }
        }

        return jqXHR;
    },

    getJSON: function (url, data, callback) {
        return jQuery.get(url, data, callback, "json");
    },

    getScript: function (url, callback) {
        return jQuery.get(url, undefined, callback, "script");
    }
});

jQuery.each(["get", "post"], function (_i, method) {
    jQuery[method] = function (url, data, callback, type) {

        // Shift arguments if data argument was omitted
        if (isFunction(data)) {
            type = type || callback;
            callback = data;
            data = undefined;
        }

        // The url can be an options object (which then must have .url)
        return jQuery.ajax(jQuery.extend({
            url: url,
            type: method,
            dataType: type,
            data: data,
            success: callback
        }, jQuery.isPlainObject(url) && url));
    };
});

jQuery.ajaxPrefilter(function (s) {
    var i;
    for (i in s.headers) {
        if (i.toLowerCase() === "content-type") {
            s.contentType = s.headers[i] || "";
        }
    }
});


jQuery._evalUrl = function (url, options, doc) {
    return jQuery.ajax({
        url: url,

        // Make this explicit, since user can override this through ajaxSetup (#11264)
        type: "GET",
        dataType: "script",
        cache: true,
        async: false,
        global: false,

        // Only evaluate the response if it is successful (gh-4126)
        // dataFilter is not invoked for failure responses, so using it instead
        // of the default converter is kludgy but it works.
        converters: {
            "text script": function () { }
        },
        dataFilter: function (response) {
            jQuery.globalEval(response, options, doc);
        }
    });
};


jQuery.fn.extend({
    wrapAll: function (html) {
        var wrap;

        if (this[0]) {
            if (isFunction(html)) {
                html = html.call(this[0]);
            }

            // The elements to wrap the target around
            wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

            if (this[0].parentNode) {
                wrap.insertBefore(this[0]);
            }

            wrap.map(function () {
                var elem = this;

                while (elem.firstElementChild) {
                    elem = elem.firstElementChild;
                }

                return elem;
            }).append(this);
        }

        return this;
    },

    wrapInner: function (html) {
        if (isFunction(html)) {
            return this.each(function (i) {
                jQuery(this).wrapInner(html.call(this, i));
            });
        }

        return this.each(function () {
            var self = jQuery(this),
                contents = self.contents();

            if (contents.length) {
                contents.wrapAll(html);

            } else {
                self.append(html);
            }
        });
    },

    wrap: function (html) {
        var htmlIsFunction = isFunction(html);

        return this.each(function (i) {
            jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
        });
    },

    unwrap: function (selector) {
        this.parent(selector).not("body").each(function () {
            jQuery(this).replaceWith(this.childNodes);
        });
        return this;
    }
});


jQuery.expr.pseudos.hidden = function (elem) {
    return !jQuery.expr.pseudos.visible(elem);
};
jQuery.expr.pseudos.visible = function (elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
};




jQuery.ajaxSettings.xhr = function () {
    try {
        return new window.XMLHttpRequest();
    } catch (e) { }
};

var xhrSuccessStatus = {

    // File protocol always yields status code 0, assume 200
    0: 200,

    // Support: IE <=9 only
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
},
    xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function (options) {
    var callback, errorCallback;

    // Cross domain only allowed if supported through XMLHttpRequest
    if (support.cors || xhrSupported && !options.crossDomain) {
        return {
            send: function (headers, complete) {
                var i,
                    xhr = options.xhr();

                xhr.open(
                    options.type,
                    options.url,
                    options.async,
                    options.username,
                    options.password
                );

                // Apply custom fields if provided
                if (options.xhrFields) {
                    for (i in options.xhrFields) {
                        xhr[i] = options.xhrFields[i];
                    }
                }

                // Override mime type if needed
                if (options.mimeType && xhr.overrideMimeType) {
                    xhr.overrideMimeType(options.mimeType);
                }

                // X-Requested-With header
                // For cross-domain requests, seeing as conditions for a preflight are
                // akin to a jigsaw puzzle, we simply never set it to be sure.
                // (it can always be set on a per-request basis or even using ajaxSetup)
                // For same-domain requests, won't change header if already provided.
                if (!options.crossDomain && !headers["X-Requested-With"]) {
                    headers["X-Requested-With"] = "XMLHttpRequest";
                }

                // Set headers
                for (i in headers) {
                    xhr.setRequestHeader(i, headers[i]);
                }

                // Callback
                callback = function (type) {
                    return function () {
                        if (callback) {
                            callback = errorCallback = xhr.onload =
                                xhr.onerror = xhr.onabort = xhr.ontimeout =
                                xhr.onreadystatechange = null;

                            if (type === "abort") {
                                xhr.abort();
                            } else if (type === "error") {

                                // Support: IE <=9 only
                                // On a manual native abort, IE9 throws
                                // errors on any property access that is not readyState
                                if (typeof xhr.status !== "number") {
                                    complete(0, "error");
                                } else {
                                    complete(

                                        // File: protocol always yields status 0; see #8605, #14207
                                        xhr.status,
                                        xhr.statusText
                                    );
                                }
                            } else {
                                complete(
                                    xhrSuccessStatus[xhr.status] || xhr.status,
                                    xhr.statusText,

                                    // Support: IE <=9 only
                                    // IE9 has no XHR2 but throws on binary (trac-11426)
                                    // For XHR2 non-text, let the caller handle it (gh-2498)
                                    (xhr.responseType || "text") !== "text" ||
                                        typeof xhr.responseText !== "string" ?
                                        { binary: xhr.response } :
                                        { text: xhr.responseText },
                                    xhr.getAllResponseHeaders()
                                );
                            }
                        }
                    };
                };

                // Listen to events
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");

                // Support: IE 9 only
                // Use onreadystatechange to replace onabort
                // to handle uncaught aborts
                if (xhr.onabort !== undefined) {
                    xhr.onabort = errorCallback;
                } else {
                    xhr.onreadystatechange = function () {

                        // Check readyState before timeout as it changes
                        if (xhr.readyState === 4) {

                            // Allow onerror to be called first,
                            // but that will not handle a native abort
                            // Also, save errorCallback to a variable
                            // as xhr.onerror cannot be accessed
                            window.setTimeout(function () {
                                if (callback) {
                                    errorCallback();
                                }
                            });
                        }
                    };
                }

                // Create the abort callback
                callback = callback("abort");

                try {

                    // Do send the request (this may raise an exception)
                    xhr.send(options.hasContent && options.data || null);
                } catch (e) {

                    // #14683: Only rethrow if this hasn't been notified as an error yet
                    if (callback) {
                        throw e;
                    }
                }
            },

            abort: function () {
                if (callback) {
                    callback();
                }
            }
        };
    }
});




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
        s.contents.script = false;
    }
});

// Install script dataType
jQuery.ajaxSetup({
    accepts: {
        script: "text/javascript, application/javascript, " +
            "application/ecmascript, application/x-ecmascript"
    },
    contents: {
        script: /\b(?:java|ecma)script\b/
    },
    converters: {
        "text script": function (text) {
            jQuery.globalEval(text);
            return text;
        }
    }
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
        s.cache = false;
    }
    if (s.crossDomain) {
        s.type = "GET";
    }
});

// Bind script tag hack transport
jQuery.ajaxTransport("script", function (s) {

    // This transport only deals with cross domain or forced-by-attrs requests
    if (s.crossDomain || s.scriptAttrs) {
        var script, callback;
        return {
            send: function (_, complete) {
                script = jQuery("<script>")
                    .attr(s.scriptAttrs || {})
                    .prop({ charset: s.scriptCharset, src: s.url })
                    .on("load error", callback = function (evt) {
                        script.remove();
                        callback = null;
                        if (evt) {
                            complete(evt.type === "error" ? 404 : 200, evt.type);
                        }
                    });

                // Use native DOM manipulation to avoid our domManip AJAX trickery
                document.head.appendChild(script[0]);
            },
            abort: function () {
                if (callback) {
                    callback();
                }
            }
        };
    }
});




var oldCallbacks = [],
    rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
        var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce.guid++));
        this[callback] = true;
        return callback;
    }
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

    var callbackName, overwritten, responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ?
            "url" :
            typeof s.data === "string" &&
            (s.contentType || "")
                .indexOf("application/x-www-form-urlencoded") === 0 &&
            rjsonp.test(s.data) && "data"
        );

    // Handle iff the expected data type is "jsonp" or we have a parameter to set
    if (jsonProp || s.dataTypes[0] === "jsonp") {

        // Get callback name, remembering preexisting value associated with it
        callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ?
            s.jsonpCallback() :
            s.jsonpCallback;

        // Insert callback into url or form data
        if (jsonProp) {
            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
        } else if (s.jsonp !== false) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
        }

        // Use data converter to retrieve json after script execution
        s.converters["script json"] = function () {
            if (!responseContainer) {
                jQuery.error(callbackName + " was not called");
            }
            return responseContainer[0];
        };

        // Force json dataType
        s.dataTypes[0] = "json";

        // Install callback
        overwritten = window[callbackName];
        window[callbackName] = function () {
            responseContainer = arguments;
        };

        // Clean-up function (fires after converters)
        jqXHR.always(function () {

            // If previous value didn't exist - remove it
            if (overwritten === undefined) {
                jQuery(window).removeProp(callbackName);

                // Otherwise restore preexisting value
            } else {
                window[callbackName] = overwritten;
            }

            // Save back as free
            if (s[callbackName]) {

                // Make sure that re-using the options doesn't screw things around
                s.jsonpCallback = originalSettings.jsonpCallback;

                // Save the callback name for future use
                oldCallbacks.push(callbackName);
            }

            // Call if it was a function and we have a response
            if (responseContainer && isFunction(overwritten)) {
                overwritten(responseContainer[0]);
            }

            responseContainer = overwritten = undefined;
        });

        // Delegate to script
        return "script";
    }
});




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = (function () {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
})();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function (data, context, keepScripts) {
    if (typeof data !== "string") {
        return [];
    }
    if (typeof context === "boolean") {
        keepScripts = context;
        context = false;
    }

    var base, parsed, scripts;

    if (!context) {

        // Stop scripts or inline event handlers from being executed immediately
        // by using document.implementation
        if (support.createHTMLDocument) {
            context = document.implementation.createHTMLDocument("");

            // Set the base href for the created document
            // so any parsed elements with URLs
            // are based on the document's URL (gh-2965)
            base = context.createElement("base");
            base.href = document.location.href;
            context.head.appendChild(base);
        } else {
            context = document;
        }
    }

    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && [];

    // Single tag
    if (parsed) {
        return [context.createElement(parsed[1])];
    }

    parsed = buildFragment([data], context, scripts);

    if (scripts && scripts.length) {
        jQuery(scripts).remove();
    }

    return jQuery.merge([], parsed.childNodes);
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function (url, params, callback) {
    var selector, type, response,
        self = this,
        off = url.indexOf(" ");

    if (off > -1) {
        selector = stripAndCollapse(url.slice(off));
        url = url.slice(0, off);
    }

    // If it's a function
    if (isFunction(params)) {

        // We assume that it's the callback
        callback = params;
        params = undefined;

        // Otherwise, build a param string
    } else if (params && typeof params === "object") {
        type = "POST";
    }

    // If we have elements to modify, make the request
    if (self.length > 0) {
        jQuery.ajax({
            url: url,

            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
        }).done(function (responseText) {

            // Save response for use in complete callback
            response = arguments;

            self.html(selector ?

                // If a selector was specified, locate the right elements in a dummy div
                // Exclude scripts to avoid IE 'Permission Denied' errors
                jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

                // Otherwise use the full result
                responseText);

            // If the request succeeds, this function gets "data", "status", "jqXHR"
            // but they are ignored because response was set above.
            // If it fails, this function gets "jqXHR", "status", "error"
        }).always(callback && function (jqXHR, status) {
            self.each(function () {
                callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
            });
        });
    }

    return this;
};




jQuery.expr.pseudos.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
        return elem === fn.elem;
    }).length;
};




jQuery.offset = {
    setOffset: function (elem, options, i) {
        var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
            position = jQuery.css(elem, "position"),
            curElem = jQuery(elem),
            props = {};

        // Set position first, in-case top/left are set even on static elem
        if (position === "static") {
            elem.style.position = "relative";
        }

        curOffset = curElem.offset();
        curCSSTop = jQuery.css(elem, "top");
        curCSSLeft = jQuery.css(elem, "left");
        calculatePosition = (position === "absolute" || position === "fixed") &&
            (curCSSTop + curCSSLeft).indexOf("auto") > -1;

        // Need to be able to calculate position if either
        // top or left is auto and position is either absolute or fixed
        if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;

        } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0;
        }

        if (isFunction(options)) {

            // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
            options = options.call(elem, i, jQuery.extend({}, curOffset));
        }

        if (options.top != null) {
            props.top = (options.top - curOffset.top) + curTop;
        }
        if (options.left != null) {
            props.left = (options.left - curOffset.left) + curLeft;
        }

        if ("using" in options) {
            options.using.call(elem, props);

        } else {
            curElem.css(props);
        }
    }
};

jQuery.fn.extend({

    // offset() relates an element's border box to the document origin
    offset: function (options) {

        // Preserve chaining for setter
        if (arguments.length) {
            return options === undefined ?
                this :
                this.each(function (i) {
                    jQuery.offset.setOffset(this, options, i);
                });
        }

        var rect, win,
            elem = this[0];

        if (!elem) {
            return;
        }

        // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
        // Support: IE <=11 only
        // Running getBoundingClientRect on a
        // disconnected node in IE throws an error
        if (!elem.getClientRects().length) {
            return { top: 0, left: 0 };
        }

        // Get document-relative position by adding viewport scroll to viewport-relative gBCR
        rect = elem.getBoundingClientRect();
        win = elem.ownerDocument.defaultView;
        return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
        };
    },

    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function () {
        if (!this[0]) {
            return;
        }

        var offsetParent, offset, doc,
            elem = this[0],
            parentOffset = { top: 0, left: 0 };

        // position:fixed elements are offset from the viewport, which itself always has zero offset
        if (jQuery.css(elem, "position") === "fixed") {

            // Assume position:fixed implies availability of getBoundingClientRect
            offset = elem.getBoundingClientRect();

        } else {
            offset = this.offset();

            // Account for the *real* offset parent, which can be the document or its root element
            // when a statically positioned element is identified
            doc = elem.ownerDocument;
            offsetParent = elem.offsetParent || doc.documentElement;
            while (offsetParent &&
                (offsetParent === doc.body || offsetParent === doc.documentElement) &&
                jQuery.css(offsetParent, "position") === "static") {

                offsetParent = offsetParent.parentNode;
            }
            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {

                // Incorporate borders into its offset, since they are outside its content origin
                parentOffset = jQuery(offsetParent).offset();
                parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
            }
        }

        // Subtract parent offsets and element margins
        return {
            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
        };
    },

    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function () {
        return this.map(function () {
            var offsetParent = this.offsetParent;

            while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.offsetParent;
            }

            return offsetParent || documentElement;
        });
    }
});

// Create scrollLeft and scrollTop methods
jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
    var top = "pageYOffset" === prop;

    jQuery.fn[method] = function (val) {
        return access(this, function (elem, method, val) {

            // Coalesce documents and windows
            var win;
            if (isWindow(elem)) {
                win = elem;
            } else if (elem.nodeType === 9) {
                win = elem.defaultView;
            }

            if (val === undefined) {
                return win ? win[prop] : elem[method];
            }

            if (win) {
                win.scrollTo(
                    !top ? val : win.pageXOffset,
                    top ? val : win.pageYOffset
                );

            } else {
                elem[method] = val;
            }
        }, method, val, arguments.length);
    };
});

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each(["top", "left"], function (_i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition,
        function (elem, computed) {
            if (computed) {
                computed = curCSS(elem, prop);

                // If curCSS returns percentage, fallback to offset
                return rnumnonpx.test(computed) ?
                    jQuery(elem).position()[prop] + "px" :
                    computed;
            }
        }
    );
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
    jQuery.each({
        padding: "inner" + name,
        content: type,
        "": "outer" + name
    }, function (defaultExtra, funcName) {

        // Margin is only for outerHeight, outerWidth
        jQuery.fn[funcName] = function (margin, value) {
            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

            return access(this, function (elem, type, value) {
                var doc;

                if (isWindow(elem)) {

                    // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                    return funcName.indexOf("outer") === 0 ?
                        elem["inner" + name] :
                        elem.document.documentElement["client" + name];
                }

                // Get document width or height
                if (elem.nodeType === 9) {
                    doc = elem.documentElement;

                    // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                    // whichever is greatest
                    return Math.max(
                        elem.body["scroll" + name], doc["scroll" + name],
                        elem.body["offset" + name], doc["offset" + name],
                        doc["client" + name]
                    );
                }

                return value === undefined ?

                    // Get width or height on the element, requesting but not forcing parseFloat
                    jQuery.css(elem, type, extra) :

                    // Set width or height on the element
                    jQuery.style(elem, type, value, extra);
            }, type, chainable ? margin : undefined, chainable);
        };
    });
});


jQuery.each([
    "ajaxStart",
    "ajaxStop",
    "ajaxComplete",
    "ajaxError",
    "ajaxSuccess",
    "ajaxSend"
], function (_i, type) {
    jQuery.fn[type] = function (fn) {
        return this.on(type, fn);
    };
});




jQuery.fn.extend({

    bind: function (types, data, fn) {
        return this.on(types, null, data, fn);
    },
    unbind: function (types, fn) {
        return this.off(types, null, fn);
    },

    delegate: function (selector, types, data, fn) {
        return this.on(types, selector, data, fn);
    },
    undelegate: function (selector, types, fn) {

        // ( namespace ) or ( selector, types [, fn] )
        return arguments.length === 1 ?
            this.off(selector, "**") :
            this.off(types, selector || "**", fn);
    },

    hover: function (fnOver, fnOut) {
        return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }
});

jQuery.each(
    ("blur focus focusin focusout resize scroll click dblclick " +
        "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
        "change select submit keydown keypress keyup contextmenu").split(" "),
    function (_i, name) {

        // Handle event binding
        jQuery.fn[name] = function (data, fn) {
            return arguments.length > 0 ?
                this.on(name, null, data, fn) :
                this.trigger(name);
        };
    }
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function (fn, context) {
    var tmp, args, proxy;

    if (typeof context === "string") {
        tmp = fn[context];
        context = fn;
        fn = tmp;
    }

    // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.
    if (!isFunction(fn)) {
        return undefined;
    }

    // Simulated bind
    args = slice.call(arguments, 2);
    proxy = function () {
        return fn.apply(context || this, args.concat(slice.call(arguments)));
    };

    // Set the guid of unique handler to the same of original handler, so it can be removed
    proxy.guid = fn.guid = fn.guid || jQuery.guid++;

    return proxy;
};

jQuery.holdReady = function (hold) {
    if (hold) {
        jQuery.readyWait++;
    } else {
        jQuery.ready(true);
    }
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function (obj) {

    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    var type = jQuery.type(obj);
    return (type === "number" || type === "string") &&

        // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
};

jQuery.trim = function (text) {
    return text == null ?
        "" :
        (text + "").replace(rtrim, "");
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if (typeof define === "function" && define.amd) {
    define("jquery", [], function () {
        return jQuery;
    });
}




var

    // Map over jQuery in case of overwrite
    _jQuery = window.jQuery,

    // Map over the $ in case of overwrite
    _$ = window.$;

jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
        window.$ = _$;
    }

    if (deep && window.jQuery === jQuery) {
        window.jQuery = _jQuery;
    }

    return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if (typeof noGlobal === "undefined") {
    window.jQuery = window.$ = jQuery;
}




return jQuery;
} );