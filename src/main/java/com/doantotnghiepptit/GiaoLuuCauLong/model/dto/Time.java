package com.doantotnghiepptit.GiaoLuuCauLong.model.dto;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Time {
    private Long id;
    private LocalDateTime startAt;
    private LocalDateTime endAt;
    private String dayOfWeek;
    private Double price;
    private Boolean isEmpty;

}
