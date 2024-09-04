package com.doantotnghiepptit.GiaoLuuCauLong.model.dto;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Round {
    private Long id;
    private String name;
    private Integer roundNo;
    private LocalDateTime createAt;

}
