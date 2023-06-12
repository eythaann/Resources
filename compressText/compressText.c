#include <stdio.h>
#include <string.h>

char * compressString(char* text) {
  char* compresedText = malloc(sizeof(char) * strlen(text) * 2);
  int count = 1;

  for (int i = 0; i < strlen(text); i++) {
    if(text[i] == text[i + 1]) {
      count++;
    } else {
      char countChar = count + '0';
      strncat(compresedText, &text[i], 1);
      strncat(compresedText, &countChar, 1);
      count = 1;
    }
  }

  if(strlen(compresedText) < strlen(text)) {
    return compresedText;
  }

  return text;
};
 
int main() {
  char text1[] = "aaavbbbbbccccaaaaaaxxxxxx";
  char text2[] = "abcdfeeqcqweniq";

  char* result = compressString(text1);
  char* result2 = compressString(text2);

  printf("result 1 => %s\n", result);
  printf("result 2 => %s\n", result2);

  if(result != text1){
    free(result);
  }
  if(result2 != text2){
    free(result2);
  }
  return 0;
} 
