const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

// 사용자의 OS 설정에 따른 초기 모드 설정 (선택 사항)
// 페이지 로드 시 사용자의 시스템 테마를 확인하고 다크 모드를 적용합니다.
if (
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches
) {
	body.classList.add("dark-mode");
}
