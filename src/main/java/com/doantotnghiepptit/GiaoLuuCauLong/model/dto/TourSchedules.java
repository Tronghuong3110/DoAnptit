package com.doantotnghiepptit.GiaoLuuCauLong.model.dto;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TourSchedules {
    private Long id;
    private Integer matchNo;
    private LocalDateTime startAt;
    private LocalDateTime createAt;
    private Integer courtNo;

}
