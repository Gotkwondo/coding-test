-- 코드를 입력하세요
SELECT NAME, count(*) from ANIMAL_INS where NAME is not null group by NAME having count(NAME) >= 2 order by NAME